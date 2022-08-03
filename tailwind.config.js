/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.jsx",
    "./components/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        arabicRegular: ["arabic-regular", "sans-serif"],
        arabicBold: ["arabic-bold", "sans-serif"],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
