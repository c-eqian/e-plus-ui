import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';

export const DEFAULT_CONFIG = {
  prefix: 'ep-',
  content: ['**/*.{js,ts,jsx,tsx,vue}', '**/*/index.html', '!**/node_modules/**'],
  // 3.4
  darkMode: ['class', '[class="dark"]'],
  theme: {
    extend: {
      boxShadow: {
        base: '2px 2px 5px 1px rgba(229,231,235,1)'
      },
      colors: {
        dark: '#0a0a0a',
        'dark-1': '#141414',
        'dark-2': '#1d1e1f',
        page: 'var(--ep-bg-color-page)',
        base: 'var(--ep-bg-color)',
        overlay: 'var(--ep-bg-color-overlay)'
      },
      backgroundColor: {
        page: 'var(--ep-bg-color-page)',
        base: 'var(--ep-bg-color)',
        overlay: 'var(--ep-bg-color-overlay)'
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
export const tailwindConfig = (config?: Config) => {
  return {
    ...DEFAULT_CONFIG,
    ...config
  } satisfies Config;
};
