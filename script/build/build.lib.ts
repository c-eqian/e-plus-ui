import { resolve } from 'path';
import terser from '@rollup/plugin-terser';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { buildEnterPath, outDir, packagesPath, PREFIX_NAME } from '../paths';
import { viteAlias } from '../plugins';
import type { UserConfig } from 'vite';

export default (): UserConfig => {
  return {
    root: packagesPath,
    publicDir: false,
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
    plugins: [viteAlias(), vue(), vueJsx()],
    build: {
      cssCodeSplit: false,
      outDir: resolve(outDir, 'lib'),
      emptyOutDir: true,
      lib: {
        entry: resolve(buildEnterPath, 'index.ts'),
        name: PREFIX_NAME,
        formats: ['es'],
        fileName: () => `index.js`
      },
      rollupOptions: {
        output: {
          globals: {
            vue: 'Vue'
          },
          assetFileNames() {
            return 'index.css';
          }
        },
        plugins: [terser()],
        external: ['vue']
      }
    }
  };
};
