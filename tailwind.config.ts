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
        "columbia": {
          50: "#FAFDFF",
          100: "#F0FAFF",
          200: "#E1F4FE",
          300: "#D2EFFE",
          400: "#C5EAFE",
          500: "#7DD0FD",
          600: "#31B5FB",
          700: "#0491DD",
          800: "#035F91",
          900: "#01314B",
          950: "#011723"
        },
        "periwinkle": {
          50: "#FCFBFE",
          100: "#F6F2FD",
          200: "#ECE5FA",
          300: "#E6DCF9",
          400: "#DCCFF6",
          500: "#D3C2F4",
          600: "#9E79E7",
          700: "#6830DA",
          800: "#431B93",
          900: "#210D49",
          950: "#120727"
        } ,
        "pink-lavender": {
          50: "#FEF6FC",
          100: "#FDF2FA",
          200: "#FAE0F4",
          300: "#F8D3EF",
          400: "#F6C3E9",
          500: "#EC83D2",
          600: "#E345BB",
          700: "#BF1D96",
          800: "#811365",
          900: "#3E0931",
          950: "#1F0518"
        },
        "champagne": {
          50: "#FFFAF5",
          100: "#FFF8F0",
          200: "#FFF1E0",
          300: "#FFE9D0",
          400: "#FFCB8F",
          500: "#FFAC4D",
          600: "#FF8D0A",
          700: "#C76A00",
          800: "#854700",
          900: "#422300",
          950: "#1F1000"
        }     
      }
    },
  },
  plugins: [],
};
export default config;
