/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0px 5px 11px 3px rgba(58,58,58,0.56)',
      }
    },
  },
  plugins: [],
}