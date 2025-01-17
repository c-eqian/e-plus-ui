import { appendFile, readFile, writeFile } from 'fs/promises';
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
    import ${componentName} from './src/${componentName}${framework === 'tsx' ? '' : `.${framework}`}';
    export const ${exportName}: typeof ${componentName} = ${componentName};
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

// 更新全局组件声明
/**
 *
 * @param code{string}
 * @return {{[p: string]: *}}
 */
function extractImports(code) {
  return Object.fromEntries(
    Array.from(code.matchAll(/['"]?([^\s'"]+)['"]?\s*:\s*(.+?)[,;\n]/g)).map(i => [i[1], i[2]])
  );
}

/**
 *
 * @param code
 * @return {any}
 */
function parseDeclaration(code) {
  if (!code) return;
  const multilineCommentsRE = /\/\*.*?\*\//gs;
  const singleLineCommentsRE = /\/\/.*$/gm;
  code = code.replace(multilineCommentsRE, '').replace(singleLineCommentsRE, '');

  const imports = {
    component: {},
    directive: {}
  };
  const componentDeclaration = /export\s+interface\s+GlobalComponents\s*\{.*?\}/s.exec(code)?.[0];
  if (componentDeclaration) imports.component = extractImports(componentDeclaration);

  const directiveDeclaration = /export\s+interface\s+ComponentCustomProperties\s*\{.*?\}/s.exec(
    code
  )?.[0];
  if (directiveDeclaration) imports.directive = extractImports(directiveDeclaration);

  return imports;
}
function stringifyDeclarationImports(imports) {
  return Object.entries(imports)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, v]) => {
      if (!/^\w+$/.test(name)) name = `'${name}'`;
      return `${name}: ${v}`;
    });
}
/**
 *
 * @return {any}
 */
function getDeclaration(originalImports, componentType, exportName) {
  const entry = `typeof import('@e-plus-ui/${componentType}/components')['${exportName}']`;
  const declarations = {
    component: stringifyDeclarationImports({ ...originalImports?.component, [exportName]: entry }),
    directive: stringifyDeclarationImports({ ...originalImports?.directive })
  };

  let code = `
export {}
 // 全局类型组件
/* prettier-ignore */
declare module 'vue' {`;

  if (Object.keys(declarations.component).length > 0) {
    code += `
  export interface GlobalComponents {
    ${declarations.component.join('\n    ')}
  }`;
  }
  if (Object.keys(declarations.directive).length > 0) {
    code += `
  export interface ComponentCustomProperties {
    ${declarations.directive.join('\n    ')}
  }`;
  }
  code += '\n}\n';
  return code;
}
/**
 * 更新全局组件声明
 * @param path{string} 全局组件声明
 * @param componentType{string} 组件类型
 * @param exportName{string} 导出名
 * @return {Promise<void>}
 */
export async function updateGlobalComponentFile(path, componentType, exportName) {
  await ensureFile(path);
  const originalContent = await readFile(path, 'utf-8');
  const originalImports = parseDeclaration(originalContent);
  const code = getDeclaration(originalImports, componentType, exportName);
  if (!code) return;
  if (code !== originalContent) await writeFile(path, code);
}
