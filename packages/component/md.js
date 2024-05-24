const { Project, SourceFile, InterfaceDeclaration } = require('ts-morph');
const { writeFileSync } = require('node:fs');

/**
 * 处理外部引入问题
 * @param typeText
 * @returns {*}
 */
function simplifyTypeText(typeText) {
  function processType(_typePart) {
    // 匹配 import(...) 表达式，包括其内部的类型和可能的泛型、数组
    const importRegex =
      /import\(["'][^'"]*["']\)\.([^<>()\[\]|]+)(<[^>]*>)?(\[[^\]]*\])?/;

    // 替换匹配的 import(...) 部分，仅保留类型名称、泛型和数组
    return _typePart.replace(importRegex, (match, typeName, generic, array) => {
      return `${typeName}${generic || ''}${array || ''}`;
    });
  }
  // 分割联合类型并处理每个部分
  const parts = typeText.split(/\s*\|\s*/).map((item)=> processType(item));
  // 处理可能存在的undefined并合并所有部分
  return parts
    .filter((part) => (part !== 'undefined'))
    .join(' | ');
}
function extractPropertyInfoWithComments(property) {
  // 提取属性的名称和类型等信息
  const propertyName = property.getName();
  const propertyType = property.getType().getText();
  // console.log(propertyType);
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
  markdownContent += '| 属性名 | 类型 | 可选 | 描述 |\n';
  markdownContent += '| --- | --- | --- | --- |\n';
  properties.forEach((property) => {
    markdownContent +=
      `| ${property.name} | \`${simplifyTypeText(property.type)}\` | ${
        property.isOptional ? '是' : '否'
      } | ${property.comments.trim().replace(/\n/g, '；') || '-'}` + '\n';
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
