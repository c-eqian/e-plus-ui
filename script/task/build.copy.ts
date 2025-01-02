import path from 'path';
import { copy } from 'fs-extra';
import { buildEnterPath, outDir, projectRoot } from '../paths';

// 复制包文件
async function copyPackageFile() {
  const readme = path.resolve(buildEnterPath, 'README.md');
  await copy(readme, path.resolve(outDir, 'README.md'));
  const packageJson = path.resolve(buildEnterPath, 'package.json');
  await copy(packageJson, path.resolve(outDir, 'package.json'));
  const resolverExtname = ['.d.ts', '.mjs', '.cjs'];
  const all = resolverExtname.map(extname => {
    const resolver = path.resolve(projectRoot, 'resolver', 'dist', `resolver${extname}`);
    return copy(resolver, path.resolve(outDir, `resolver${extname}`));
  });
  await Promise.all(all);
}

export async function copyFiles() {
  await copyPackageFile();
}
