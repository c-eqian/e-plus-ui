import { eslintPresets, fileNamingPlugin } from '@eqian/eslint-config-preset';
export default eslintPresets([
  {
    ignores: [
      'eslint.config.mjs',
      '**/*/components.ts',
      '**/*/*.d.ts',
      'web-types.config.js'
    ],
    name: 'test'
  },
  {
    name: "custom-rules",
    rules: {
      'no-void': 'off'
    }
  },
  {
    name: 'file-naming',
    plugins: {
      'file-naming': fileNamingPlugin,
    },
    rules: {
      'file-naming/component-naming': [
        'error',
        {
          'packages/**/*.{jsx,tsx,vue}': 'PASCAL_CASE', // 对组件统一使用大驼峰
        }
      ],
      'file-naming/no-index-naming': [ // 禁止对组件命名index或者Index
        'error',
        'packages/**/*.{jsx,tsx,vue}'
      ],
      'file-naming/folder-naming': [
        'error',
        {
          'packages/**/*': 'KEBAB_CASE', // 对组件统一使用烤肉串
        }
      ],
      'file-naming/filename-naming': [
        'error',
        {
          'packages/**/*.{ts,js,mts,mjs}': 'CAMEL_CASE', // 对文件统一使用小驼峰
        }
      ],
    }
  }
]);
