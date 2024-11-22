/** @type {import('tailwindcss').Config} */  

export default {
  content: [  
    './src/**/*.{html,js,jsx,ts,tsx}', // Ensure this is correct  
    './public/index.html',  
  ], 
    theme: {
      extend: {
        colors: {
          'custom-b': '#0F1D40',
          'custom-b-f': '#2D4071',
          'custom-gray': '#8c939f',
          'custom-text-b': '#0094ff',
        },
        fontFamily: {  
          sans: ['Inter', 'sans-serif'],  
        },
      },
    },
    plugins: [],
  }