/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightWhite: '#F7FAFA', 
        whiteColor: '#FFFFFF', 
        lightGreen: '#78aba8',
        gray: '#ECECEF',
        darkGray: '#DCDCDC'
      }
    },
  },
  plugins: [],
}

