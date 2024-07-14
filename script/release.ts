import { consola } from 'consola';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { exec, execSync } from 'node:child_process';
import fs from 'fs-extra';
const __dirname = fileURLToPath(new URL('.', import.meta.url));
export const DIR_ROOT = resolve(__dirname, '..');
async function build(v: 'rc' | 'alpha' | '' = '') {
  consola.info('构建中 ...');
  if (v === 'rc') {
    execSync('npm run release:rc', { stdio: 'inherit' });
  } else if (v === 'alpha') {
    execSync('npm run release:alpha', { stdio: 'inherit' });
  } else {
    execSync('npm run release', { stdio: 'inherit' });
  }
  consola.info('版本构建成功 ...');
}

async function updatePackage() {
  const ROOT_PKG = join(DIR_ROOT, 'package.json');
  const UPDATE_PKG = join(DIR_ROOT, 'e-plus-ui/package.json');
  const { version } = await fs.readJSON(ROOT_PKG);
  const packageJSON = await fs.readJSON(UPDATE_PKG);
  packageJSON.version = version;
  await fs.writeJSON(UPDATE_PKG, packageJSON, { spaces: 2 });
}
async function updateDocs() {
  await fs.copyFile(
    join(DIR_ROOT, 'CHANGELOG.md'),
    join(DIR_ROOT, 'docs/guide/CHANGELOG.md')
  );
  consola.success('更新成功-------------success');
}
async function gitPush() {
  /**
   * 如果由于无法提交推送，手动操作即可
   */
  const VERSION_PKG = join(DIR_ROOT, 'e-plus-ui/package.json');
  const { version } = await fs.readJSON(VERSION_PKG);
  execSync('git add .', { stdio: 'inherit' });
  execSync(`git commit -m "chore: release v${version}"`, { stdio: 'inherit' });
  execSync('git show-ref --tags');
  exec(`git show-ref --tags v${version}`, (error, stdout) => {
    if (!error && !stdout) {
      try {
        execSync(`git tag -a v${version} -m "v${version}"`, {
          stdio: 'inherit',
        });
      } catch (err) {
        consola.warn(err);
      }
    }
    execSync(`git push origin master v${version}`, { stdio: 'inherit' });
    const command = 'npm publish --access public';
    execSync(command, { stdio: 'inherit', cwd: join(DIR_ROOT, 'dist') });
    consola.success('Published');
  });
}
async function run() {
  await build();
  await updatePackage();
  await updateDocs();
}

run();
