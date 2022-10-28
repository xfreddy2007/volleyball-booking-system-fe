/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('tailwindcss').Config} */

/* eslint-disable no-param-reassign */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './containers/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      gray: colors.gray,
      white: {
        DEFAULT: '#F4EBEC',
      },
      yellow: {
        DEFAULT: '#F7D025',
      },
      blue: {
        DEFAULT: '#1C69A5',
      },
      navy: {
        DEFAULT: '#0C2F68',
      },
      red: {
        DEFAULT: '#E61556',
      },
    },
    extend: {},
  },
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addUtilities, matchUtilities, addComponents, addVariant, e }) => {
      addComponents({
        // fonts
        '.font-robot': { 'font-family': "'Roboto', 'Helvetica Neue', Arial, sans-serif" },
        '.font-arial': { 'font-family': 'Arial, Helvetica, sans-serif' },
        '.font-raleway': { 'font-family': "'Raleway', 'Helvetica Neue', Arial, sans-serif" },
        '.font-source-code': { 'font-family': "'Source Code Pro', monospace, sans-serif" },
      });

      // add grid-area jit mode
      try {
        // 這段會讓 vscode tailwindcss extensions crash, 加個 try cache 就正常了
        const newMatchUtilities = {
          'grid-area': (value) => ({
            gridArea: value,
          }),
        };
        matchUtilities(newMatchUtilities);
      } catch (error) {
        // eslint-disable-line
      }

      // Log in state css prefix
      addVariant('data-loggedin', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.${e(`data-loggedin${separator}${className}`)}[data-loggedin="true"]`);
      });

      // data active
      addVariant('data-active', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.${e(`data-active${separator}${className}`)}[data-active="true"]`);
      });

      // Admin user Log in state css prefix
      addVariant('data-admin', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.${e(`data-admin${separator}${className}`)}[data-admin="true"]`);
      });
    }),
  ],
};
