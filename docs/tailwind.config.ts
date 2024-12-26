import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';

export default {
  prefix: 'ep-',
  content: [
    '../packages/**/*.{js,ts,jsx,tsx,vue}',
    './examples/**/*.{js,ts,jsx,tsx,vue}',
    './components/**/*.{js,ts,jsx,tsx,vue html}',
    './.vitepress/**/*.{js,ts,jsx,tsx,vue html}',
    '!**/node_modules/**/*.{js,ts,jsx,tsx,vue}'
  ],
  // 3.4
  darkMode: ['class', '[class="dark"]'],
  theme: {
    extend: {
      boxShadow: {
        base: '2px 2px 5px 1px rgba(229,231,235,1)'
      },
      textColor: {
        sub: '#a0a0a0'
      }
    }
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.3xl') },
        h2: { fontSize: theme('fontSize.2xl') },
        h3: { fontSize: theme('fontSize.lg') }
      });
    })
  ]
} satisfies Config;
