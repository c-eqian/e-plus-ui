
import { defineConfig } from 'vite';
// eslint-disable-next-line.md import/extensions
// import vue from '@vitejs/plugin-vue';
// import DefineOptions from 'unplugin-vue-define-options/vite';
// import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// eslint-disable-next-line.md import/extensions
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from 'path';
// import path from "path";
// import Components from 'unplugin-vue-components/vite'
// import requireTransform from 'vite-plugin-require-transform';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vueJsx()],
  resolve: {
    // 配置路径别名
    alias: {
      'e-plus-ui': path.resolve(__dirname, '../src')
    },
  },
    server: {
        host: '0.0.0.0',
        port: 2222
    },
})
