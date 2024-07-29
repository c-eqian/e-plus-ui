import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  prefix: 'cz-',
  content: [
    './packages/**/*.{js,ts,jsx,tsx,vue}',
    './play/*.{js,ts,jsx,tsx,vue}',
    './play/index.html',
    './docs/examples/**/*.{js,ts,jsx,tsx,vue}',
    './docs/components/**/*.{js,ts,jsx,tsx,vue html}',
    './docs/.vitepress/**/*.{js,ts,jsx,tsx,vue html}',
  ],
  // 3.4
  darkMode: ['class', '[class="dark"]'],
  theme: {
    extend: {
      boxShadow: {
        base: '2px 2px 5px 1px rgba(229,231,235,1)',
      },
      colors: {
        dark: '#0a0a0a',
        'dark-1': '#141414',
        'dark-2': '#1d1e1f',
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
