/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/script.js"],
  theme: {
    extend: {
      // screens: { xs: { max: "576px" } },
      colors: {
        title: "#1C1C1C",
        primary: "#777777",
      },
      fontFamily: {
        primary: ['"Manrope", sans-serif'],
      },
    },
  },
  plugins: [],
};
