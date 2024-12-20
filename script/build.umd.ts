import { UserConfigExport, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import terser from '@rollup/plugin-terser';
import { outDir, packagesPath, projectRoot } from './paths';

export default ({ mode }): UserConfigExport => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env,
    },
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
          api: 'modern-compiler',
        },
      },
    },
    plugins: [vue(), vueJsx()],
    build: {
      cssCodeSplit: false,
      outDir: resolve(outDir, 'umd'),
      emptyOutDir: true,
      lib: {
        entry: resolve(packagesPath, 'index.ts'),
        name: 'ePlusUi',
        formats: ['umd'],
        fileName: (name) => `index.js`,
      },
      rollupOptions: {
        output: {
          globals: {
            vue: 'Vue',
          },
          exports: 'named',
          assetFileNames: 'index.css',
        },
        plugins: [terser()],
        external: ['vue'],
      },
    },
  };
};
