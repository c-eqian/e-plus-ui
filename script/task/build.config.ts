import { outEsDir, outLibDir } from '../paths';
import type { ModuleFormat } from 'rollup';

export const buildConfig = {
  esm: {
    module: 'ESNext',
    format: 'esm' as ModuleFormat,
    ext: 'mjs',
    output: {
      name: 'es',
      path: outEsDir
    }
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs' as ModuleFormat,
    ext: 'js',
    output: {
      name: 'lib',
      path: outLibDir
    }
  }
};
