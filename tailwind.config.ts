import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prosto: ["var(--font-prosto)"],
        anonymous: ["var(--font-anonymous)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        'custom-black': '#1B1B1B',
        'custom-white': {
          DEFAULT: '#f5f5f5',
          200: 'rgba(245,245,245,.2)',
          700: 'rgba(245,245,245,.7)',
        },
        'custom-red': {
          DEFAULT: '#C83E4D',
          700: 'rgba(200,62,77,.7)',
        },
      },
      dropShadow: {
        'image': '3 0 0 rgba(245,245,245,.7)',
      },
    },
  },
  plugins: [],
};
export default config;
