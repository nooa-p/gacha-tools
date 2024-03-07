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
        'spray': {
          '50': '#ebffff',
          '100': '#cdfbff',
          '200': '#a1f4ff',
          '300': '#71ecff',
          '400': '#1ad5f6',
          '500': '#00b8dc',
          '600': '#0192b9',
          '700': '#097595',
          '800': '#115e79',
          '900': '#134e66',
          '950': '#063346',
        },
        'peach-schnapps': {
          '50': '#fef5f2',
          '100': '#fee8e2',
          '200': '#fedcd3',
          '300': '#fcb7a5',
          '400': '#f78e72',
          '500': '#ee6845',
          '600': '#db4d27',
          '700': '#b83d1d',
          '800': '#99351b',
          '900': '#7f321d',
          '950': '#45160a',
        } ,
        'chantilly': {
          '50': '#fcf3f9',
          '100': '#fbe8f6',
          '200': '#f6c3e8',
          '300': '#f4addf',
          '400': '#ec7ac8',
          '500': '#e252b0',
          '600': '#d03291',
          '700': '#b42276',
          '800': '#951f62',
          '900': '#7c1f53',
          '950': '#4b0c2f',
        },
        'perfume': {
          '50': '#f9f6fe',
          '100': '#f1ebfc',
          '200': '#e6dbf9',
          '300': '#d5c2f4',
          '400': '#b795eb',
          '500': '#9b6ce0',
          '600': '#844dd0',
          '700': '#6f3bb5',
          '800': '#5f3495',
          '900': '#4e2b78',
          '950': '#321457',
        }      
      }
    },
  },
  plugins: [],
};
export default config;
