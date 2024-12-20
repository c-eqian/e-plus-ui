import { join } from 'node:path';
import chalk from 'chalk';
import consola from 'consola';
import fs from 'fs-extra';
import { projectRoot } from './paths';
import { run } from './run';
import { getVersion } from './utils';

async function updateDocs() {
  await fs.copyFile(
    join(projectRoot, 'CHANGELOG.md'),
    join(projectRoot, 'docs/guide/CHANGELOG.md')
  );
  consola.success('CHANGELOG.md');
}
export async function publish() {
  await updateDocs();
  const version = await getVersion();
  await run('git add .', projectRoot);
  await run(`git commit -m "chore: release v${version}"`, projectRoot);
  await run(`git push origin master v${version}`, projectRoot);
  // const command = 'npm publish --access public';
  // execSync(command, { stdio: 'inherit', cwd: outDir });
  consola.success(`${chalk.green('published successfully')} ${chalk.cyan(`v${version}`)}`);
}
