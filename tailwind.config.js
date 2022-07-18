const { accent } = require("daisyui/src/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      // {
      //   mytheme: {
      //     primary: "#0fcfec",
      //     secondary: "#19d3ae",
      //     accent: "#3a4256",
      //   },
      // },
      // "cmyk",
      "night",
    ],
  },
  plugins: [require("daisyui"), require("tailwindcss-gradient")],
};
