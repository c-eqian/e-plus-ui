import { writeFile } from 'fs/promises';
import path from 'path';
import { useSort } from '@eqian/utils-vue';
import chalk from 'chalk';
import chalkLog from 'consola';
import glob from 'fast-glob';
import vueDoc from 'vue-docgen-api';
import { outDir, packagesPath } from '../paths.ts';
import { excludeFiles, getVersion } from '../utils.ts';
import { defineParseMeta } from './parse-meta';
import type { JSONSchemaForWebTypes, VueComponentDoc } from './types.ts';

function mergeProps(props1: any[], props2: any[]) {
  if (props1.length === 0) return props2;
  if (props2.length === 0) return props1;
  props1 = useSort(props1, {
    order: 'asc',
    key: 'name'
  });
  props2 = useSort(props2, {
    order: 'asc',
    key: 'name'
  });
  const [_props1, _props2] = props1.length > props2.length ? [props2, props1] : [props1, props2];
  for (let i = 0; i < _props1.length; i++) {
    const description = _props1[i].description;
    const name = _props1[i].name;
    const index = _props2?.findLastIndex(item => item.name === name);

    if (description) {
      if (index > -1 && !_props2[index].description) {
        _props2[index].description = description;
      }
    }
  }
  return _props2;
}
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
  const { parseComponentMeta, getList } = defineParseMeta();
  const parseAll = files.map(async file => {
    parseComponentMeta(file);
    return await vueDoc.parse(file, {
      addScriptHandlers: [
        // 添加自定义处理注释文件，获取组件说明
        function (_documentation, componentDefinition: any) {
          if (componentDefinition.leadingComments) {
            const leadingComments = componentDefinition.leadingComments[0];
            _documentation.set('description', leadingComments.value);
          }
          _documentation.set('file', file);
          return Promise.resolve();
        }
      ]
    });
  });
  const content: VueComponentDoc[] = await Promise.all(parseAll);
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
  const docContent = content
    .filter(doc => (doc.name || doc.displayName).startsWith('Ep'))
    .map(doc => {
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
            attributes: mergeProps(getList(doc.file!).props ?? [], doc.props ?? [])?.map(prop => {
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
            events: mergeProps(getList(doc.file!).events ?? [], doc.events ?? [])?.map(event => ({
              name: event.name,
              description: event.description
            })),
            slots: mergeProps(getList(doc.file!).slots ?? [], doc.slots ?? [])?.map(slot => ({
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
