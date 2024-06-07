const { Project } = require('ts-morph');
const { writeFileSync, existsSync, mkdirSync } = require('node:fs');
const { dirname, parse, basename } = require('path');
const path = require('path');
// 创建一个TypeScript项目对象
const project = new Project({
  tsConfigFilePath: './tsconfig.markdown.json',
});
const docsRoot = path.resolve(__dirname, '..', '..', 'docs/components/type');
// 从文件系统加载tsconfig.json文件，并将其中的所有源文件添加到项目中
// project.addSourceFilesAtPaths('example.ts');

/**
 * 获取类
 * @param file
 * @returns {string[]}
 */
async function getClasses(file) {
  const classes = file.getClasses();
  return classes.map((cls) => {
    const doc = cls.getJsDocs()[0]?.getDescription().trim() || '';
    // Get properties
    const propertyList = cls.getProperties().map((property) => {
      const signature = `### ${property.getName()}`;
      const description =
        property.getJsDocs()[0]?.getDescription().trim() || '';
      const type = property.getTypeNode()
        ? `\n\n- **Type:** \`${property.getTypeNode()?.getText()}\``
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
async function getAllInterfaces(file) {
  const interfaces = file.getInterfaces();
  return interfaces.map((_interfaces) => {
    const doc = _interfaces.getJsDocs()[0]?.getDescription().trim() || '';
    // Get properties
    const propertyList = _interfaces.getProperties().map((property) => {
      const signature = `### ${property.getName()}`;
      const _default = property.getJsDocs().map((item) => {
        const defaultList = item?.getTags().map((tag) => {
          const paramName = tag.getTagName(); // 这通常是参数的名称
          if (paramName === 'default') {
            const paramDescription = tag.getComment(); // 这通常是参数的描述
            return `\n\n- **Default:** \`${paramDescription}\``;
          }
        });
        return defaultList[0];
      });
      const description =
        property.getJsDocs()[0]?.getDescription().trim() || '';
      const type = property.getTypeNode()
        ? `\n\n- **Type:** \`${property.getTypeNode()?.getText()}\``
        : '';
      const readonly = property.isReadonly() ? '\n\n**Readonly**' : '';
      return [signature, description, type, _default, readonly]
        .filter(Boolean)
        .join('\n');
    });

    // Combine methods and properties
    const memberList = [...propertyList].join('\n\n');

    return [`## ${_interfaces.getName()} \n\n${doc}`, memberList].join('\n\n');
  });
}
async function getTypeAliases(file) {
  // 获取所有类型别名并检查名称
  const typeAliases = file.getTypeAliases();
  return typeAliases.map((typeAlias) => {
    const signature = `## ${typeAlias.getName()}`;
    const description = typeAlias.getJsDocs()[0]?.getDescription().trim() || '';
    const alias = typeAlias.getTypeNode();
    const type = alias ? `\n\n- **Type:**\n \`${alias.getText()}\`` : '';
    return [signature, description, type].filter(Boolean).join('\n');
  });
}
// 获取项目中的所有源文件
const sourceFiles = project.getSourceFiles();
function getFilePathName(file) {
  let pathObject = parse(file.getFilePath());
  return basename(pathObject.dir);
}
function createTypeMdFile(file, data) {
  // // 检查目录是否存在
  // if (!existsSync(`markdown`)) {
  //   // 如果目录不存在，则创建它（包括任何不存在的父目录）
  //   mkdirSync(`markdown`, { recursive: true });
  //   console.log(`Directory ${`markdown`} has been created.`);
  // }
  const fileName = getFilePathName(file);
  const savePath = path.join(docsRoot, `${fileName}.md`);
  writeFileSync(savePath, data);
}
function checkerIsHas(file) {
  const fileName = getFilePathName(file);
  const savePath = path.join(docsRoot, `${fileName}.md`);
  return existsSync(savePath);
}
function run(isReset = false) {
  sourceFiles.forEach(async (file) => {
    const fileName = getFilePathName(file);
    const _header = [
      `# ${fileName.toLowerCase().replace(/\b[a-z]/g, function (match) {
        return match.toUpperCase();
      })}`,
    ];
    if (!isReset) {
      if (!checkerIsHas(file)) {
        const classList = await getClasses(file);
        const interfaceList = await getAllInterfaces(file);
        const typeAliasesList = await getTypeAliases(file);
        const data = [
          _header,
          ...classList,
          ...interfaceList,
          ...typeAliasesList,
        ].join('\n\n');
        createTypeMdFile(file, data);
      }
    } else {
      const classList = await getClasses(file);
      const interfaceList = await getAllInterfaces(file);
      const typeAliasesList = await getTypeAliases(file);
      const data = [
        _header,
        ...classList,
        ...interfaceList,
        ...typeAliasesList,
      ].join('\n\n');
      createTypeMdFile(file, data);
    }
  });
}
run(true);
console.log('转换成功!!!!!');
