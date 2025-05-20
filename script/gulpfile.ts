import { remove } from 'fs-extra';
import { parallel, series } from 'gulp';
import { generateApi } from './generate-api';
import { outDir } from './paths';
import {
  buildModules,
  buildResolver,
  buildStyles,
  copyFiles,
  generateResolveCssPath,
  typesDts
} from './task';
import { generateDocWebTypes } from './web-types/vue-docgen';
const removeOutputDir = async () => await remove(outDir);
export default series(
  removeOutputDir,
  series(generateResolveCssPath, buildResolver),
  parallel(buildModules, typesDts, copyFiles, generateDocWebTypes, buildStyles),
  generateApi
);
