import { readFile, writeFile } from 'fs/promises';
import path from 'node:path';
import { normalize, relative, resolve } from 'path';
import chalk from 'chalk';
import consola from 'consola';
import glob from 'fast-glob';
import { ensureFile, remove } from 'fs-extra';
import {
  buildTsConfigPath,
  globalPath,
  outDir,
  outTypesDir,
  PREFIX_NAME,
  PREFIX_PACKAGE_NAME,
  tsBuildCachePath
} from '../paths';
import { run } from '../run';
import { replaceAll } from '../utils';

export const buildModulesDts = async () => {
  await remove(tsBuildCachePath);
  await run(`npx vue-tsc -p ${buildTsConfigPath} --declaration --emitDeclarationOnly`);
  const typesDir = resolve(outTypesDir, 'packages');
  const filePaths = await glob(`**/*.d.ts`, {
    cwd: typesDir,
    absolute: true
  });
  const rewriteTasks = filePaths.map(async filePath => {
    const content = await readFile(filePath, 'utf8');
    const normalizedTypesDirPath = normalize(typesDir).replace(/\\/g, '/');
    const normalizedFilePath = normalize(filePath).replace(/\\/g, '/');
    let _newPath = relative(normalizedTypesDirPath, normalizedFilePath);
    if (_newPath.startsWith(PREFIX_NAME)) {
      _newPath = _newPath.substring(PREFIX_NAME.length + 1);
    }
    await ensureFile(resolve(outTypesDir, _newPath));
    await writeFile(
      resolve(outTypesDir, _newPath),
      replaceAll(content, PREFIX_PACKAGE_NAME, `${PREFIX_NAME}/types`),
      'utf8'
    );
  });
  await Promise.all(rewriteTasks);
  await remove(resolve(outTypesDir, 'packages'));
};

export const globalDts = async () => {
  const content = await readFile(globalPath, 'utf8');
  await writeFile(
    path.resolve(outDir, 'global.d.ts'),
    content.replaceAll(/@e-plus-ui\/*.*\/components/g, PREFIX_NAME),
    'utf8'
  );
};

export const typesDts = async () => {
  await Promise.all([buildModulesDts(), globalDts()]);
  consola.success(chalk.green('类型文件生成已完成'));
};
