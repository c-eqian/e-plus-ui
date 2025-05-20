import fs from 'fs/promises';
import * as path from 'node:path';
import chalk from 'chalk';
import consola from 'consola';
import { ensureFile } from 'fs-extra';
import { projectRoot, styleCssPath } from '../paths';
import { run } from '../run';
import { hasCSSorSCSSFiles } from '../utils';

/**
 * 获取指定目录下包含.scss文件的子目录名
 */
async function getSubDirsWithScss(targetDir: string) {
  try {
    const entries = await fs.readdir(targetDir, { withFileTypes: true });
    const subDirs = entries.filter(entry => entry.isDirectory()).map(entry => entry.name);

    const result = [];
    for (const subDir of subDirs) {
      const subDirPath = path.join(targetDir, subDir);
      if (await hasCSSorSCSSFiles(subDirPath)) {
        result.push(subDir);
      }
    }
    return result;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}
async function writeToTsFile(data: any, outputPath: string) {
  try {
    const content = `// 自动生成的文件，请勿手动修改
export const HAS_STYLES: string[] = ${JSON.stringify(data, null, 2).replace(/"([^"]+)"/g, "'$1'")};
`;

    // 确保输出目录存在
    await ensureFile(outputPath);

    await fs.writeFile(outputPath, content, 'utf-8');
    consola.success(chalk.green(`成功写入文件：${outputPath}`));
  } catch (error) {
    consola.error(chalk.green(`写入文件错误：${error}`));
  }
}
// 生成具有css文件的目录
export const generateResolveCssPath = async () => {
  const subDirs = await getSubDirsWithScss(styleCssPath);
  await writeToTsFile(subDirs, path.resolve(projectRoot, 'resolver', 'constants.ts'));
};

export const buildResolver = async () => await run('pnpm run build:resolver', projectRoot);
