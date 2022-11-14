/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily : {
      'sans' : ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'dark-green': '#093816',
        'lime-green' : '#119D22',
        'ligth' : '#E0E1D1',
        'white' : 'white'
      },
      screens : {
        'xs': '360px'
      }
    },
  },
  plugins: [],
}
