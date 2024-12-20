import { resolve } from 'path';
import terser from '@rollup/plugin-terser';
import { buildBaseCssPath, outDir, packagesPath, PREFIX_NAME } from '../paths';
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
    build: {
      cssCodeSplit: true,
      outDir: resolve(outDir, 'styles'),
      emptyOutDir: true,
      lib: {
        entry: [buildBaseCssPath],
        name: PREFIX_NAME,
        formats: ['es'],
        fileName: () => `index.js`
      },
      rollupOptions: {
        output: {
          assetFileNames() {
            return 'index.css';
          }
        },
        plugins: [terser()]
      }
    }
  };
};
