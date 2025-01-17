import fs from 'node:fs'; // 用于着色stdinstdout的小实用程序,可以将颜色放入stdin和stdout中
import { resolve } from 'node:path';
import { useCamelize } from '@eqian/utils-vue';
import { consola } from 'consola/basic';
import pc from 'picocolors';
// 文件处理
//路径处理
import minimist from 'minimist'; // 处理命令行参数
import prompts from 'prompts'; // 终端交互
// 终端交互
import { blue, cyan, green, red, reset, yellow } from 'kolorist';
import {
  createEnter,
  createStyle,
  createTsxTemplate,
  createType,
  createVueTemplate,
  getSrcDir,
  updateComponentFile,
  updateGlobalComponentFile
} from './template.js';
/**
 * 默认项目名称
 * 如果没有输入名称，使用默认的
 * @type {string}
 */
/**
 * 解析命令行参数
 * 如 npm create-template button
 * @type {{_: []}}
 */
const argv = minimist(process.argv.slice(2), { string: ['-'] });

// 定义UI组件类型，pure/element
const TYPEKIT = [
  {
    name: 'pure',
    color: green
  },
  {
    name: 'element',
    color: blue
  }
];
/**
 * 开发模式
 * @type {[{name: string, color: *},{name: string, color: *}]}
 */
const DEMODE = [
  {
    name: 'vue',
    color: cyan
  },
  {
    name: 'tsx',
    color: yellow
  }
];
/**
 * 格式化组件目录名称
 * 将最后的/替换为空
 * @param componentName
 * @returns {string | undefined}
 */
function formatTargetDir(componentName) {
  return componentName?.trim().replace(/\/+$/g, '');
}
/**
 * 判断当前路径是否为空
 * @param path
 * @returns {boolean}
 */
function isEmpty(_path) {
  const files = fs.readdirSync(_path);
  return files.length === 0;
}
async function init() {
  // 获取不带前缀的参数，即组件目录名称， 如button，同时，也会创建一个名为Button.(vue,tsx)组件
  let componentName = formatTargetDir(argv._[0]);
  let componentType;
  let result;
  try {
    result = await prompts(
      [
        {
          type: 'select',
          name: 'componentType',
          message: reset('请选择组件类型'),
          initial: 0,
          choices: TYPEKIT.map(component => {
            const componentNameColor = component.color;
            return {
              title: componentNameColor(component.name),
              value: component.name
            };
          }),
          onState: state => {
            componentType = state.value;
          }
        },
        // 组件名称
        {
          type: 'text', // 交互类型
          name: 'componentName', // 显示名称
          initial: componentName || 'button',
          message: reset('组件名称'), //提示显示消息
          onState: state => {
            // 在状态更改回调时。函数签名具有两个属性：和object value aborted
            componentName = formatTargetDir(state.value);
          },
          validate: value => {
            if (!value) {
              return '请输入组件名称';
            }
            const absPath = getSrcDir(componentType, componentName);
            if (fs.existsSync(absPath) && !isEmpty(absPath)) {
              return `当前${componentType}下已存在${componentName}，请重新输入组件名称`;
            }
            return true;
          }
        },
        {
          type: 'select',
          name: 'framework',
          message: reset('请选择开发模式'),
          initial: 0,
          choices: DEMODE.map(mode => {
            const frameworkColor = mode.color;
            return {
              title: frameworkColor(mode.name),
              value: mode.name
            };
          })
        },
        {
          type: 'confirm',
          name: 'useCss',
          message: '是否创建scss文件?',
          initial: false
        },
        {
          type: 'text',
          name: 'desc',
          message: '组件描述?',
          initial: ''
        }
      ],
      {
        onCancel: () => {
          throw new Error(`${red('✖')} 操作已取消`);
        }
      }
    );
  } catch (e) {
    consola.info(pc.red(e.message));
    return;
  }
  const {
    framework,
    componentName: _componentName,
    componentType: _componentType,
    useCss,
    desc = ''
  } = result;
  const newComponentName = _componentName || componentName;
  const __componentName = useCamelize(newComponentName, true);
  const _exportName = `Ep${__componentName}`;
  const basePath = getSrcDir(_componentType, newComponentName);
  const enterPath = resolve(basePath, 'index.ts');
  const typePath = resolve(basePath, 'src', 'type.ts');
  const globalPath = resolve(process.cwd(), 'types', 'global.d.ts');
  const codePath = resolve(basePath, 'src', `${__componentName}.${framework}`);
  const stylePath = resolve(
    process.cwd(),
    'packages',
    'styles',
    newComponentName,
    `${newComponentName}.scss`
  );
  await Promise.all([
    createEnter(__componentName, _exportName, enterPath, framework),
    createType(__componentName, typePath),
    framework === 'tsx'
      ? createTsxTemplate(__componentName, _exportName, codePath, desc)
      : createVueTemplate(__componentName, _exportName, codePath, desc),
    updateComponentFile(_componentType, newComponentName),
    updateGlobalComponentFile(globalPath, _componentType, _exportName)
  ]);
  if (useCss) {
    await createStyle(stylePath);
  }
  consola.success(`\n[${pc.blue(newComponentName)}] ${pc.green('已成功创建')}`);
}
init().catch(e => {
  consola.error(pc.red(e.message));
});
