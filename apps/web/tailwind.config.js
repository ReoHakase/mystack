const { createThemes } = require('tw-colors');

const coreTokens = require('tokens-studio/dist/tailwind-css/core.json');
const lightTokens = require('tokens-studio/dist/tailwind-css/light.json');
const darkTokens = require('tokens-studio/dist/tailwind-css/dark.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Used with `next-themes`
  theme: {
    colors: coreTokens.colors,
  },
  plugins: [
    createThemes({
      light: lightTokens.colors,
      dark: darkTokens.colors,
    }),
  ],
};
