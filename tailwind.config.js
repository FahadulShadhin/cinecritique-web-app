const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      rainblue: {
        50: "#028c9e",
        100: "#028090",
      },
      raingray: {
        100: "#4E4E4E",
      },
    },
  },
  plugins: [],
};
