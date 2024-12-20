import path from 'path';
import { copy } from 'fs-extra';
import { buildEnterPath, outDir, projectRoot } from '../paths';

// 复制包文件
async function copyPackageFile() {
  const readme = path.resolve(projectRoot, 'README.md');
  await copy(readme, path.resolve(outDir, 'README.md'));
  const packageJson = path.resolve(buildEnterPath, 'package.json');
  await copy(packageJson, path.resolve(outDir, 'package.json'));
}

export async function copyFiles() {
  await copyPackageFile();
}
