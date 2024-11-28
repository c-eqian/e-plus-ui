import { UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import terser from '@rollup/plugin-terser';
import { outDir, packagesPath, projectRoot } from './paths';

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
          api: 'modern-compiler',
        },
      },
    },
    plugins: [vue(), vueJsx()],
    build: {
      cssCodeSplit: false,
      outDir: resolve(outDir, 'lib'),
      emptyOutDir: true,
      lib: {
        entry: resolve(packagesPath, 'index.ts'),
        name: 'e-plus-ui',
        formats: ['es'],
        fileName: (name) => `index.js`,
      },
      rollupOptions: {
        output: {
          globals: {
            vue: 'Vue',
          },
          assetFileNames: 'index.css',
        },
        plugins: [terser()],
        external: ['vue'],
      },
    },
  };
};
