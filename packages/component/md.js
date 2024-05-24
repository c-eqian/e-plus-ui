const { Project, SourceFile, InterfaceDeclaration } = require('ts-morph');
const { writeFileSync } = require('node:fs');

function extractPropertyInfoWithComments(property) {
  // 提取属性的名称和类型等信息
  const propertyName = property.getName();
  const propertyType = property.getType().getText();
  const isOptional = property.hasQuestionToken(); // 检查属性是否可选

  // 提取 JSDoc 注释
  const jsDoc = property.getJsDocs();
  let jsDocComments = '';
  if (jsDoc.length > 0) {
    jsDoc.forEach((doc) => {
      jsDocComments += `${doc.getDescription().trim()}\n\n`; // 累加并添加换行符,获取注释的描述部分，不包含标识符
    });
  }

  // 返回包含属性和注释的对象
  return {
    name: propertyName,
    type: propertyType,
    isOptional, // 添加可选性属性
    comments: jsDocComments,
  };
}

function generateInterfaceMarkdown(interfaceNode) {
  const interfaceName = interfaceNode.getName();
  const properties = interfaceNode
    .getProperties()
    .map(extractPropertyInfoWithComments);

  let markdownContent = `## ${interfaceName}\n\n`;
  markdownContent += '| 属性名 | 类型 | 是否可选 | 描述 |\n';
  markdownContent += '| --- | --- | --- | --- |\n';
  properties.forEach((property) => {
    markdownContent +=
      `| ${property.name} | \`${property.type}\` | ${
        property.isOptional ? '是' : '否'
      } | ${property.comments.trim().replace(/\n/g, '；') || '-'}` + '\n';
    console.log(markdownContent);
  });

  return markdownContent;
}

async function main() {
  const project = new Project({ tsConfigFilePath: 'tsconfig.markdown.json' });
  const sourceFile = project.getSourceFileOrThrow('example.ts');

  let markdownContent = '# 接口文档\n\n';

  sourceFile.getInterfaces().forEach((interfaceNode) => {
    const interfaceMarkdown = generateInterfaceMarkdown(interfaceNode);
    markdownContent += interfaceMarkdown + '\n\n---\n\n'; // 添加分隔线以区分不同的接口
  });

  const outputFilePath = 'interfaces.md';
  writeFileSync(outputFilePath, markdownContent);

  console.log(`接口文档已写入：${outputFilePath}`);
}

main().catch(console.error);
