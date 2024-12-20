import { resolve } from 'path';
import terser from '@rollup/plugin-terser';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import glob from 'fast-glob';
import { buildEnterPath, outDir, packagesPath } from '../paths';
import { autoImportCss, replaceExport } from '../plugins';
import { excludeFiles, generateExternal, getNamePath } from '../utils';
import type { UserConfig } from 'vite';
const filePaths = excludeFiles(
  await glob(['**/*.{js,ts,vue,tsx}', '!**/e-plus-ui'], {
    cwd: packagesPath,
    absolute: true,
    onlyFiles: true
  })
);
const inputs = getNamePath(filePaths);
inputs.index = resolve(buildEnterPath, 'index.ts');
export default (): UserConfig => {
  return {
    root: packagesPath,
    publicDir: false,
    resolve: {
      alias: {
        '@e-plus-ui': packagesPath
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // 修改api调用方式
        },
        less: {
          javascriptEnabled: true
        }
      }
    },
    plugins: [vue(), vueJsx(), replaceExport(), autoImportCss()],
    build: {
      cssCodeSplit: true,
      emptyOutDir: true,
      outDir: resolve(outDir, 'es'),
      lib: {
        entry: buildEnterPath,
        formats: ['es']
      },
      rollupOptions: {
        input: inputs,
        plugins: [terser()],
        output: {
          globals: {
            vue: 'Vue'
          },
          manualChunks(id) {
            const _id = id.toString().split('/packages/')[1];
            if (id.includes('node_modules')) {
              const chunksName = '_chunks/';
              return chunksName + id.toString().split('node_modules/')[1].split('/')[0].toString();
            } else if (_id) {
              const arr = _id.split('/');
              arr.pop(); // 排除index.ts
              const entryPoint = arr.join('/');
              if (entryPoint.startsWith('pure') || entryPoint.startsWith('element')) {
                // 特别处理样式文件
                if (/\.(?:scss|css|less)$/.test(id)) {
                  return `${entryPoint}/index`;
                }
                return entryPoint;
              }
            }
          },
          chunkFileNames: ({ name }) => {
            return name === 'index' ? 'index.js' : '[name].js';
          },
          entryFileNames: ({ name }) => {
            if (/\.(?:ts|js|vue|tsx|jsx)$/.test(name)) {
              const [_name] = name.split('.');
              return `${_name}.js`;
            }
            return name === 'index' ? 'index.js' : '[name]/index.js';
          },
          assetFileNames: chunkInfo => {
            // 处理样式，确保样式目录结构一致
            if (chunkInfo.name) {
              const [name, ext] = chunkInfo.name.split('.');
              return `${name}.${ext}`;
            }
            return '';
          }
        },
        external: generateExternal({ full: false })
      }
    }
  };
};
