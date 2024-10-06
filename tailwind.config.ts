import type { Config } from 'tailwindcss';
import { colors } from './src/app/types/colors';

const safeColours = colors.flatMap((color) => [
  `bg-${color}`,
  `border-${color}`,
  `hover:bg-${color}`,
]);

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [...safeColours],
  theme: {
    extend: {
      colors: {
        blue: '#75ABDB',
        purple: '#9681B8',
        pink: '#FFCFEA',
        green: '#6C8E7F',
        yellow: '#FAF796',
        white: '#F3FDFF',
        black: '#14001E',
      },
      fontFamily: {
        'archivo-black': 'var(--font-archivo-black)',
        lora: 'var(--font-lora)',
        radley: 'var(--font-radley)',
      },
      borderWidth: {
        3: '3px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [],
};

export default config;
