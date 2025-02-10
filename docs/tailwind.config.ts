import { DEFAULT_CONFIG, tailwindConfig } from '@e-plus-ui/tailwind-config';
export default tailwindConfig({
  ...DEFAULT_CONFIG,
  content: [
    '../packages/**/*.{js,ts,jsx,tsx,vue}',
    './examples/**/*.{js,ts,jsx,tsx,vue}',
    './components/**/*.{js,ts,jsx,tsx,vue html}',
    './.vitepress/**/*.{js,ts,jsx,tsx,vue html}',
    '!**/node_modules/**/*.{js,ts,jsx,tsx,vue}'
  ]
});
