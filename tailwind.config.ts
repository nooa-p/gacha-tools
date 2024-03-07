import type { Config } from "tailwindcss";
// todo: insert catpuccin colors
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
          50: '#e6edfa',
          100: '#dbe1f6',
          200: '#cdd0f4',
          300: '#c4c2e5',
          400: '#ab9fd6',
          500: '#9a7ec4',
          600: '#8e67ad',
          700: '#7f578e',
          800: '#6d4b71',
          900: '#5b3e5a',
          950: '#41203b',
      }
      }
    },
  },
  plugins: [],
};
export default config;
