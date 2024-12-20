import { UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import * as fs from 'fs';
import terser from '@rollup/plugin-terser';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { outDir, packagesPath, projectRoot } from './paths';

const inputsArray = fs.readdirSync(packagesPath).filter((name) => {
  const componentDir = resolve(packagesPath, name);
  const isDir = fs.lstatSync(componentDir).isDirectory();
  return isDir && fs.readdirSync(componentDir).includes('index.ts');
});

const inputs = inputsArray.reduce((backObj, pkgName) => {
  backObj[pkgName] = resolve(packagesPath, `${pkgName}/index.ts`);
  return backObj;
}, {});

inputs['index'] = resolve(packagesPath, 'index.ts');

const matchModule: string[] = [
  'input',
  'dropdown',
  'carousel',
  'transition',
  'datePicker',
  'header',
  'selectOption',
  'skeletonItem',
  'tabItem',
  'upload',
  'checkbox',
  'badge',
  'button',
  'tooltip',
  'page',
  'scroll',
  'radio',
  'empty',
  'dropdownMenu',
  'dropdownMenuItem',
  'tag',
  'tagInput',
  'footer',
  'tree',
  'utils',
  'selectOptionGroup',
  'select',
];

export default (): UserConfigExport => {
  return {
    publicDir: false,
    resolve: {
      alias: [
        {
          find: '@',
          replacement: projectRoot,
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // 修改api调用方式
        },
        less: {
          javascriptEnabled: true,
        },
      },
      postcss: {
        tailwindcss,
        autoprefixer,
      },
    },
    plugins: [vue(), vueJsx()],
    build: {
      cssCodeSplit: true,
      emptyOutDir: true,
      outDir: resolve(outDir, 'es'),
      lib: {
        entry: resolve(packagesPath, 'index.ts'),
        formats: ['es'],
      },
      rollupOptions: {
        input: inputs,
        plugins: [terser()],
        output: {
          globals: {
            vue: 'Vue',
          },
          manualChunks(id) {
            const arr = id.toString().split('/');
            if (id.includes('node_modules')) {
              const chunksName = '_chunks/';
              return (
                chunksName +
                id.toString().split('node_modules/')[1].split('/')[0].toString()
              );
            } else if (arr.length >= 2) {
              const entryPoint = arr[arr.length - 2].toString();
              if (matchModule.includes(entryPoint)) {
                return entryPoint;
              }
            }
          },
          chunkFileNames: ({ name }) => {
            return name === 'index' ? 'index.js' : '[name]/index.js';
          },
          entryFileNames: ({ name }) => {
            return name === 'index' ? 'index.js' : '[name]/index.js';
          },
          assetFileNames: '[name]/index.css',
        },
        external: ['vue', 'vue-router', 'element-plus'],
      },
    },
  };
};
