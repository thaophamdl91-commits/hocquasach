import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#00D26A',
          dark:    '#00ba5e',
          bg:      '#e6fff3',
        },
      },
    },
  },
  plugins: [],
};

export default config;
