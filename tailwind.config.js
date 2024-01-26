/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./**/*.html", "./**/*.js"],
  },
  theme: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      colors: {
        primary: "#0B4B66",
        "primary-light": "#2d7695",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
