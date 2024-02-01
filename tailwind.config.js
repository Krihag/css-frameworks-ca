/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./**/*.html", "./**/*.js"],
    // options: {
    //   safelist: ["bg-primary", "text-primary", "border-primary"],
    // },
  },
  theme: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      colors: {
        primary: "#0B4B66",
        "primary-normal": "#0B4B65",
        "primary-light": "#2d7695",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
