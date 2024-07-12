import { Project } from 'ts-morph';
import { globby } from 'globby';
import * as path from 'path';
import * as fs from 'fs';

const COMPONENT_NAME_PREFIX = 'Ep';

// 驼峰命名
const getComponentName = (name) => {
  const capitalizedName = `${COMPONENT_NAME_PREFIX}-${name}`;
  return capitalizedName
    .replace(/[-_](.)/g, function (match, group) {
      return group.toUpperCase();
    })
    .replace(/^\w/, (c) => c.toUpperCase());
};

// 要生成类型声明的目录
const targetDir = './e-plus-ui/types';

// 创建一个 ts-morph 项目实例
const project = new Project({
  // 传递 tsConfigFilePath 以便 ts-morph 使用正确的 TypeScript 配置
  tsConfigFilePath: './tsconfig.json',
});

async function generateGlobalComponents() {
  // 使用 globby 查找目标目录下的所有 .d.ts 文件
  const files = await globby([`${targetDir}/**/*.vue.d.ts`]);

  // global.d.ts 文件路径
  const globalFilePath = path.resolve(targetDir + '/components.d.ts');

  // 创建 global.d.ts 文件
  const globalFile =
    project.getSourceFile(globalFilePath) ||
    project.createSourceFile(globalFilePath, '', { overwrite: true });

  // 清空旧内容
  globalFile.replaceWithText('');

  // 创建全局组件导入声明字符串
  let importStatements = `// GlobalComponents for Editor  \n`;
  let globalComponentDeclarations = '';

  // 遍历每个文件并处理
  files.forEach((file) => {
    const filePath = path.resolve(file);

    // 获取相对于项目根目录的文件路径
    let relativeFilePath = path.relative(
      path.dirname(globalFilePath),
      filePath
    );
    relativeFilePath = relativeFilePath.split(path.sep).join('/');
      console.log(relativeFilePath)
    // 获取文件名作为组件名
    const component = path.basename(filePath, '.d.ts');
    const componentName = getComponentName(component.split('.')[0]);

    // 添加导入声明
    importStatements += `import ${componentName} from '${relativeFilePath}';\n`;

    // 添加 GlobalComponents 声明确保模块声明
    globalComponentDeclarations += `${componentName}: typeof ${componentName};\n\t\t`;
  });

  // 构建 global.d.ts 的内容
  const globalFileContent = `
${importStatements}
declare module '@vue/runtime-core' {
  interface GlobalComponents {
    ${globalComponentDeclarations}
  }
}

export {}
`;

  // 异步写入内容到 global.d.ts 文件
  await fs.promises.writeFile(globalFilePath, globalFileContent, 'utf8');
}

// 执行函数
generateGlobalComponents().catch((err) => {
  console.error('Error generating global.d.ts:', err);
});
