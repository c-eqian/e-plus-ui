import path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@/e-plus-ui': path.resolve(__dirname, '..', 'packages', 'e-plus-ui')
    }
  }
});
