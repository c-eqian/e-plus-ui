import { exec } from 'node:child_process';
import { resolve } from 'node:path';
import chalk from 'chalk';
import consola from 'consola';
import fs from 'fs-extra';
import { buildEnterPath, projectRoot } from './paths';
import { run } from './run';
import { getVersion } from './utils';
export async function updatePackageVersion() {
  const version = await getVersion();
  const epPackage = resolve(buildEnterPath, 'package.json');
  const packageJSON = await fs.readJSON(epPackage);
  packageJSON.version = version;
  await fs.writeJSON(epPackage, packageJSON, { spaces: 2 });
  consola.success(`${chalk.green('successfully updated version to')} ${chalk.blue(`v${version}`)}`);
  exec(`git show-ref --tags v${version}`, (error, stdout) => {
    if (!error && !stdout) {
      try {
        run(`git tag -a v${version} -m "v${version}"`, projectRoot);
        consola.success(`${chalk.green('successfully created tag')} ${chalk.cyan(`v${version}`)}`);
      } catch (err) {
        consola.warn(err);
      }
    }
  });
}
