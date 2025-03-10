/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        whiteGray: '#fafafa',
        lightWhite: '#F7FAFA', 
        whiteColor: '#FFFFFF', 
        lightGreen: '#78aba8',
        gray: '#ECECEF',
        darkGray: '#DCDCDC',
        iconGray: '#8F8F8F'
      }
    },
  },
  plugins: [],
}

