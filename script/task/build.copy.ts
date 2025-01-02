import path from 'path';
import { copy } from 'fs-extra';
import { buildEnterPath, outDir, projectRoot } from '../paths';

// 复制包文件
async function copyPackageFile() {
  const readme = path.resolve(buildEnterPath, 'README.md');
  await copy(readme, path.resolve(outDir, 'README.md'));
  const packageJson = path.resolve(buildEnterPath, 'package.json');
  await copy(packageJson, path.resolve(outDir, 'package.json'));
  const resolver = path.resolve(projectRoot, 'resolver', 'dist', 'resolver.mjs');
  await copy(resolver, path.resolve(outDir, 'resolver.mjs'));
}

export async function copyFiles() {
  await copyPackageFile();
}
