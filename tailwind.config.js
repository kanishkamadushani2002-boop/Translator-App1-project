/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
        russo: ['Russo One', 'sans-serif'],
         notoSansJp:['Noto Sans JP', 'sans-senif'],
        Shojumaru:['Shojumaru', 'system-ui'],
      },
        translate: ['active'],
    },
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
      '.serollbar-hide' :{
        '::-webkit-serollbar': {display: 'none'},
        '-ms-overflow-style': 'none', 
        'serollbar-width': 'none',
      },
      }
      addUtilities(newUtilities)
    },
  ],
}

