/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'xxs' : "440px",
      'xs' : "560px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

