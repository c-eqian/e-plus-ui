import { readFile, writeFile } from 'fs/promises';
import path from 'node:path';
import chalk from 'chalk';
import consola from 'consola';
import glob from 'fast-glob';
import { ensureFile, remove } from 'fs-extra';
import {
  buildTsConfigPath,
  globalPath,
  outDir,
  outEsDir,
  outTypesDir,
  PREFIX_NAME,
  PREFIX_PACKAGE_NAME
} from '../paths';
import { replaceAll } from '../utils';
import { run } from './run';
// buildTypes();

// function buildTypes() {
//   rollupTypes();
// }

export async function rollupTypes() {
  try {
    consola.info(chalk.green(`generate types use tsconfig：${buildTsConfigPath}`));
    await run(`npx vue-tsc -p ${buildTsConfigPath} --declaration --emitDeclarationOnly`);
    const typesDir = path.resolve(outTypesDir, 'packages');
    const filePaths = await glob(`**/*.d.ts`, {
      cwd: typesDir,
      absolute: true
    });
    const rewriteTasks = filePaths.map(async filePath => {
      const content = await readFile(filePath, 'utf8');
      const normalizedTypesDirPath = path.normalize(typesDir).replace(/\\/g, '/');
      const normalizedFilePath = path.normalize(filePath).replace(/\\/g, '/');
      let _newPath = path.relative(normalizedTypesDirPath, normalizedFilePath);
      if (_newPath.startsWith(PREFIX_NAME)) {
        _newPath = _newPath.substring(PREFIX_NAME.length + 1);
      }
      await ensureFile(path.resolve(outEsDir, _newPath));
      await writeFile(
        path.resolve(outEsDir, _newPath),
        replaceAll(content, PREFIX_PACKAGE_NAME, `${PREFIX_NAME}/es`),
        'utf8'
      );
    });
    await Promise.all(rewriteTasks);
    await remove(outTypesDir);
    consola.info(chalk.green(`generate global.d ...`));
    const content = await readFile(globalPath, 'utf8');
    await writeFile(
      path.resolve(outDir, 'global.d.ts'),
      content.replaceAll(/@e-plus-ui\/*.*\/components/g, PREFIX_NAME),
      'utf8'
    );
    consola.success(chalk.green('generate types successfully.'));
  } catch (error) {
    consola.error(chalk.red(`ERROR: The command failed. stdout:${error}`));
  }
}
