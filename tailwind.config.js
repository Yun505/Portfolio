const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./Home.js"],
  theme: {
    colors :{
      purple: colors.purple,
    },
    extend: {},
  },
  plugins: [],
}
