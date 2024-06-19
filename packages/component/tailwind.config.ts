import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  prefix: 'cz-',
  content: ['./src/**/*.{js,ts,jsx,tsx,vue}'],
  // 3.4
  darkMode: ['class', '[class="dark"]'],
  theme: {
    extend: {
      boxShadow: {
        base: '0px 0px 12px rgba(0, 0, 0, .12)',
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
