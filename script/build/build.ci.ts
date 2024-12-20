import path from 'path';
import { copy, remove } from 'fs-extra';
import { build } from 'vite';
import { buildEnterPath, outDir, projectRoot, tsBuildCachePath } from '../paths';
import { generateDocWebTypes } from '../web-types/vue-docgen';
import { rollupTypes } from './build.dts';
import buildEsm from './build.es';
import buildLib from './build.lib';
import buildStyles from './build.styles';
export async function seriesBuildTask() {
  await remove(tsBuildCachePath);
  await build(buildLib());
  await build(buildEsm());
  await rollupTypesTask();
}
export async function rollupTypesTask() {
  await rollupTypes();
}
export async function buildStylesTask() {
  await build(buildStyles());
}

async function copyPackageFile() {
  const readme = path.resolve(projectRoot, 'README.md');
  await copy(readme, path.resolve(outDir, 'README.md'));
  const packageJson = path.resolve(buildEnterPath, 'package.json');
  await copy(packageJson, path.resolve(outDir, 'package.json'));
}
function start() {
  seriesBuildTask().then();
  buildStylesTask().then();
  generateDocWebTypes().then();
  copyPackageFile().then();
}
start();
