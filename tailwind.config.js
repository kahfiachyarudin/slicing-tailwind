 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
      colors:{
        'primary': '#680000',
        'secondary': '#730000',
        'thirdy': '#590202',
        'fourthy': '#8c3e3e'
      },
      fontFamily: {
        'josefin': ["Josefin Sans", 'sans-serif']
      }
     },
   },
   plugins: [],
 }