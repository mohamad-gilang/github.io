/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./project/**/*.{html,js}",
    "index.html",
  ],
  theme: {
    extend: {
      fontFamily:{
        worksans: ['"Work Sans"', 'sans-serif'],
        lora: ['"Lora"', 'serif'],


        
      },
    },
  },
  plugins: [],
}