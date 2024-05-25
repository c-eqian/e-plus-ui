const { Project } = require('ts-morph');
const { writeFileSync } = require('node:fs');

// 创建一个TypeScript项目对象
const project = new Project({
  tsConfigFilePath: './tsconfig.markdown.json',
});

// 从文件系统加载tsconfig.json文件，并将其中的所有源文件添加到项目中
project.addSourceFilesAtPaths('example.ts');

/**
 * 获取类
 * @param file
 * @returns {string[]}
 */
function getClasses(file) {
  const classes = file.getClasses();
  return classes.map((cls) => {
    const doc = cls.getJsDocs()[0]?.getDescription().trim() || '';
    // Get properties
    const propertyList = cls.getProperties().map((property) => {
      const signature = `### ${property.getName()}`;
      const description =
        property.getJsDocs()[0]?.getDescription().trim() || '';
      const type = property.getTypeNode()
        ? `\n\n**Type:** \`${property.getTypeNode()?.getText()}\``
        : '';
      return [signature, description, type].filter(Boolean).join('\n');
    });

    // Combine methods and properties
    const memberList = [...propertyList].join('\n\n');

    return [`## ${cls.getName()} \n\n${doc}`, memberList].join('\n\n');
  });
}

/**
 * 获取接口
 * @param file
 * @returns {string[]}
 */
function getAllInterfaces(file) {
  const interfaces = file.getInterfaces();
  return interfaces.map((_interfaces) => {
    const doc = _interfaces.getJsDocs()[0]?.getDescription().trim() || '';
    // Get properties
    const propertyList = _interfaces.getProperties().map((property) => {
      const signature = `### ${property.getName()}`;
      const description =
        property.getJsDocs()[0]?.getDescription().trim() || '';
      const type = property.getTypeNode()
        ? `\n\n**Type:** \`${property.getTypeNode()?.getText()}\``
        : '';
      const readonly = property.isReadonly() ? '\n\n**Readonly**' : '';
      return [signature, description, type, readonly]
        .filter(Boolean)
        .join('\n');
    });

    // Combine methods and properties
    const memberList = [...propertyList].join('\n\n');

    return [`## ${_interfaces.getName()} \n\n${doc}`, memberList].join('\n\n');
  });
}
function getTypeAliases(file) {
  // 获取所有类型别名并检查名称
  const typeAliases = file.getTypeAliases();
  return typeAliases.map((typeAlias) => {
    const signature = `## ${typeAlias.getName()}`;
    const description = typeAlias.getJsDocs()[0]?.getDescription().trim() || '';
    const alias = typeAlias.getTypeNode();
    const type = alias ? `\n\n**Type:**\n \`${alias.getText()}\`` : '';
    return [signature, description, type].filter(Boolean).join('\n');
  });
}
// 获取项目中的所有源文件
const sourceFiles = project.getSourceFiles();
const data = sourceFiles.map((file) => {
  const classList = getClasses(file);
  const interfaceList = getAllInterfaces(file);
  const typeAliasesList = getTypeAliases(file);
  return [...classList, ...interfaceList, ...typeAliasesList].join('\n\n');
});
writeFileSync('output.md', data.join('\n'));
