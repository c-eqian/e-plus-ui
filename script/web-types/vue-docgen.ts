import { writeFile } from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import chalkLog from 'consola';
import glob from 'fast-glob';
import vueDoc from 'vue-docgen-api';
import { outDir, packagesPath } from '../paths.ts';
import { excludeFiles, getVersion } from '../utils.ts';
import type { ExtraType, JSONSchemaForWebTypes } from './types.ts';

function handleMultiTypes(type: Record<string, any>) {
  switch (type.name) {
    case 'union':
      return [(type.elements?.map((item: any) => item.name) || []).join('|')];
    default:
      return type.name;
  }
}
export async function generateDocWebTypes() {
  /**
   * 获取所有入口vue组件
   * 排除子组件，如果需要子组件导出，需要单独提出来作为单独的组件
   */
  const getVueFiles = async () => {
    return excludeFiles(
      await glob(['**/[A-Z]*.{vue,tsx}', '!**/e-plus-ui', '!**/src/components/*.{vue,tsx}'], {
        cwd: packagesPath,
        absolute: true,
        onlyFiles: true
      })
    );
  };
  const files = await getVueFiles();
  const parseAll = files.map(async file => {
    return await vueDoc.parse(file, {
      addScriptHandlers: [
        // 添加自定义处理注释文件，获取组件说明
        function (_documentation, componentDefinition: any) {
          if (componentDefinition.leadingComments) {
            const leadingComments = componentDefinition.leadingComments[0];
            _documentation.set('description', leadingComments.value);
          }
          return Promise.resolve();
        }
      ]
    });
  });
  const content: (ExtraType & vueDoc.ComponentDoc)[] = await Promise.all(parseAll);
  /**
   * 写入包信息
   * 版本等
   */
  async function genBaseContent() {
    const baseContent: JSONSchemaForWebTypes = {
      framework: 'vue',
      name: 'e-plus-ui',
      version: await getVersion(),
      contributions: {
        html: {}
      }
    };
    return baseContent;
  }
  const docContent = content.map(doc => {
    let description = doc.description?.trim() ?? '';
    doc.docsBlocks?.forEach((block: string) => {
      description += block;
    });
    chalkLog.success(
      `[${chalk.blue(doc.name ?? doc.displayName)}]  ${chalk.green('generate success')}`
    );
    return {
      tags: [
        {
          name: doc.name ?? doc.displayName,
          description,
          attributes: doc.props?.map(prop => {
            return {
              name: prop.name,
              required: prop.required,
              description: prop.description,
              value: {
                kind: 'expression',
                type: prop.type ? handleMultiTypes(prop.type) : 'any'
              },
              default: prop.defaultValue?.value
            };
          }),
          events: doc.events?.map(event => ({
            name: event.name,
            description: event.description
          })),
          slots: doc.slots?.map(slot => ({
            name: slot.name,
            description: slot.description
          })),
          source: {
            // module: ensureRelative(path.relative(config.cwd, absolutePath)),
            symbol: doc.name ?? doc.displayName
          }
        }
      ]
    };
  });
  const baseContent = await genBaseContent();
  baseContent.contributions.html = {
    'description-markup': 'markdown',
    'types-syntax': 'typescript',
    tags: docContent.flatMap(d => d.tags || [])
  };
  await writeFile(path.resolve(outDir, 'web-types.json'), JSON.stringify(baseContent, null, 2));
}
