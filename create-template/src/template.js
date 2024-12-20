import { appendFile, writeFile } from 'fs/promises';
import { dirname, resolve } from 'node:path';
import { ensureDir, ensureFile } from 'fs-extra';

/**
 * tsx模版
 * @param componentName{string} 组件名称，如Line
 * @param exportName{string} 导出组件名称，如EpLine
 * @param path{string} 写入路径
 * @param desc 组件描述
 */
export async function createTsxTemplate(componentName, exportName, path, desc) {
  const code = `
    import { defineComponent } from 'vue';
    ${desc ? `/** ${desc} */` : ''}
    export default defineComponent({
      name: '${exportName}',
      setup(props, { slots }) {
        return {};
      },
      render() {
        return (
          <>
            <div>${componentName}</div>
          </>
        );
      }
    });
    `;
  await ensureDir(dirname(path));
  await writeFile(path, code, 'utf-8');
}

/**
 * 创建vue模板
 * @param componentName{string} 组件名称，如Line
 * @param exportName{string} 导出组件名称，如EpLine
 * @param path{string} 写入路径
 * @param desc{string} 组件描述
 */
export async function createVueTemplate(componentName, exportName, path, desc) {
  const code = `
    <script setup lang="ts">
    ${desc ? `/** ${desc} */` : ''}
    defineOptions({
      name: '${exportName}'
    });
    </script>

    <template>
      <div>${componentName}</div>
    </template>
    
    <style scoped lang="scss"></style>
    `;
  await ensureDir(dirname(path));
  await writeFile(path, code, 'utf-8');
}

/**
 * 类型文件
 * @param componentName{string}
 * @param path{string} 写入路径
 */
export async function createType(componentName, path) {
  const code = `
     /**
     * 参数类型
     */
    export type ${componentName}Props =  {}
    `;
  await ensureDir(dirname(path));
  await writeFile(path, code, 'utf-8');
}

/**
 * 入口文件
 * @param componentName{string} 组件名称，如Line
 * @param exportName{string} 导出组件名称，如EpLine
 * @param path{string} 写入路径
 * @param framework{string} 后缀名
 */
export async function createEnter(componentName, exportName, path, framework) {
  const code = `
    import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
    import ${componentName} from './src/${componentName}${framework === 'tsx' ? '' : `.${framework}`}';
    export const ${exportName}: SFCWithInstall<typeof ${componentName}> = withInstall(${componentName});
    export * from './src/type';
    `;
  await ensureDir(dirname(path));
  await writeFile(path, code, 'utf-8');
}

/**
 * 创建样式文件
 * @param path{string}
 * @return {Promise<void>}
 */
export async function createStyle(path) {
  await ensureDir(dirname(path));
  await writeFile(path, '', 'utf-8');
}
/**
 * 获取源码目录
 * @param componentType{string} 组件类型，pure/element
 * @param componentName{string} 组件名称
 * @param isSrc{boolean?}
 */
export function getSrcDir(componentType, componentName, isSrc) {
  const base = resolve(process.cwd(), 'packages', componentType, 'components', componentName);
  if (isSrc) {
    return resolve(base, 'src');
  }
  return base;
}

/**
 *  更新组件入库文件
 * @param componentType{string}
 * @param componentName{string}
 */
export async function updateComponentFile(componentType, componentName) {
  const base = resolve(process.cwd(), 'packages', componentType, 'components.ts');
  await ensureFile(base);
  await appendFile(base, `\n\nexport * from './components/${componentName}';`);
}
