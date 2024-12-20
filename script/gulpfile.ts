import { remove } from 'fs-extra';
import { parallel, series } from 'gulp';
import { outDir } from './paths';
import { buildModules, buildStyles, copyFiles, typesDts } from './task';
import { generateDocWebTypes } from './web-types/vue-docgen';
const removeOutputDir = async () => await remove(outDir);
export default series(
  removeOutputDir,
  parallel(buildModules, typesDts, copyFiles, generateDocWebTypes, buildStyles)
);
