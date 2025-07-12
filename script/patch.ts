import { consola } from 'consola/basic';
import { blue, cyan, green, red, reset } from 'kolorist';
import pc from 'picocolors';
// 处理命令行参数
import prompts from 'prompts';
import { projectRoot } from './paths'; // 终端交互
import { run } from './run';
const RELEASE_MAP = [
  {
    name: 'patch',
    command: '--release-as patch',
    desc: '小版本更新，如：1.0.0 --> 1.0.1',
    color: blue
  },
  {
    name: 'minor',
    command: '--release-as minor',
    desc: '次版本更新， 如：1.0.0 --> 1.1.0',
    color: green
  },
  {
    name: 'major',
    command: '--release-as major',
    desc: '主版本更新， 如：1.0.0 --> 2.0.0',
    color: red
  },
  {
    name: 'beta',
    command: '--prerelease beta',
    desc: '预发布beta版本， 如：1.0.0 --> 1.0.0-beta.0',
    color: cyan
  },
  {
    name: 'alpha',
    command: '--prerelease alpha',
    desc: '预发布alpha版本， 如：1.0.0 --> 1.0.0-alpha.0',
    color: reset
  }
];
async function command() {
  let result;
  try {
    result = await prompts([
      {
        type: 'select',
        name: 'releaseName',
        initial: 0,
        message: reset('请选择发布方式'),
        choices: RELEASE_MAP.map(item => {
          const itemColor = item.color;
          return {
            title: itemColor(item.name),
            value: item.command,
            description: item.desc
          };
        })
      }
    ]);
  } catch (e: any) {
    consola.info(pc.red(e.message || '脚本执行失败'));
    return;
  }
  const { releaseName } = result;
  if (!releaseName) {
    consola.warn('releaseName为空！！！');
    return;
  }
  const BASE_COMMAND = 'standard-version ';
  await run(`${BASE_COMMAND + releaseName} && ` + `pnpm run -C script release`, projectRoot);
}
command().then();
