import type { Config } from "tailwindcss";
// todo: remove unused colors
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
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'base': '#1e1e2e',
      'crust': '#11111b',
      'mantle': '#181825',
      'surface': {
        'light': '#585b70',
        DEFAULT: '#45475a',
        'dark': '#313244'
      },
      'overlay': {
        'light': '#9399b2',
        DEFAULT: '#7f849c',
        'dark': '#6c7086'
      },
      'text': '#cdd6f4',
      'subtext': {
        'light': '#bac2de',
        'dark': '#a6adc8'
      },
      'rosewater': '#f5e0dc',
      'flamingo': '#f2cdcd',
      'pink': '#f5c2e7',
      'mauve': '#cba6f7',
      'red': '#f38ba8',
      'maroon': '#eba0ac',
      'peach': '#fab387',
      'yellow': '#f9e2af',
      'green': '#a6e3a1',
      'teal': '#94e2d5',
      'sky': '#89dceb',
      'sapphire': '#74c7ec',
      'blue': '#89b4fa',
      'lavender': '#b4befe'
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;
