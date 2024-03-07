import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'periwinkle': {
          50: '#f9f6fe',
          100: '#f0eafb',
          200: '#e6dcf9',
          300: '#d9ceee',
          400: '#bda9e0',
          500: '#a286d0',
          600: '#8c6cbc',
          700: '#7556a4',
          800: '#644c85',
          900: '#54406d',
          950: '#372353',
        }
      }
    },
  },
  plugins: [],
};
export default config;
