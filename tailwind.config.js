const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'orange': '#FF630E'
      }
    },
    fontFamily:{
      'Cabin': ['Cabin'],
      'Cavean':['Caveat'],
      'CaveatBrush': ['"Caveat Brush"'],
    },
  },
  darkMode: "class",
  plugins: [
    nextui()
  ],
}