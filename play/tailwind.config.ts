import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  prefix: 'cz-',
  content: [
    '../packages/component/src/**/*.{js,ts,jsx,tsx,vue}',
    './*.{js,ts,jsx,tsx,vue}',
    './index.html',
  ],
  // 3.4
  darkMode: ['class', '[class="dark"]'],
  theme: {
    extend: {
      boxShadow: {
        base: '2px 2px 5px 1px rgba(229,231,235,1)',
      },
      textColor: {
        sub: '#a0a0a0',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.3xl') },
        h2: { fontSize: theme('fontSize.2xl') },
        h3: { fontSize: theme('fontSize.lg') },
      });
    }),
  ],
} satisfies Config;
