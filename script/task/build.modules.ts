import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import glob from 'fast-glob';
import { series } from 'gulp';
import { rollup, type OutputOptions } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';
import { packagesPath, PREFIX_NAME } from '../paths';
// import { viteAlias } from '../plugins';
import postcss from 'rollup-plugin-postcss';
import { excludeFiles, generateExternal, writeBundles } from '../utils';
import { buildConfig } from './build.config';
const rollupPlugins: any[] = [
  // viteAlias(),
  // rollupReplaceExport(),
  vue({
    isProduction: true,
    template: {
      compilerOptions: {
        hoistStatic: false,
        cacheHandlers: false
      }
    }
  }),
  vueJsx(),
  nodeResolve({
    extensions: ['.mjs', '.js', '.json', '.ts']
  }),
  commonjs(),
  postcss({
    extract: true
    // extract: 'css/index.css'
  }),
  esbuild({
    sourceMap: true,
    target: 'es2018',
    loaders: {
      '.vue': 'ts'
    }
  })
];

async function buildModulesComponents() {
  const input = excludeFiles(
    await glob(['**/*.{js,ts,vue,tsx}', '!**/style/(index|css).{js,ts,vue}'], {
      cwd: packagesPath,
      absolute: true,
      onlyFiles: true
    })
  );
  const bundle = await rollup({
    input,
    plugins: rollupPlugins,
    external: generateExternal({ full: false }),
    treeshake: { moduleSideEffects: false }
  });
  await writeBundles(
    bundle,
    Object.entries(buildConfig).map(([moduleName, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: moduleName === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: packagesPath,
        sourcemap: true,
        entryFileNames({ name }) {
          if (name.startsWith('node_modules')) {
            const chunksName = '_chunks/';
            name = chunksName + name.toString().split('node_modules/')[1].split('/')[0].toString();
            return `${name}/index.${config.ext}`;
          }
          // 将packages/e-plus-ui打包结果，取消e-plus-ui目录
          if (name.startsWith(PREFIX_NAME)) {
            return `${name.substring(PREFIX_NAME.length + 1)}.${config.ext}`;
          }
          return `[name].${config.ext}`;
        }
      };
    })
  );
}

export const buildModules = series(buildModulesComponents);
