/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1440px',
      },
      fontFamily: {
        'bodyFont': ["Karla", "sans-serif"],
        'titleFont': ["Raleway", "sans-serif"]
      },
      colors: {
        'bodyColor': '#212121',
        'primary': '#018ec3',
        'secondary': '#ff6600',
        'primary-100': '#017caa',
        'primary-200': '#015777',
      },
      fontSize: {
				display1: '6.25rem', //text-size 100px
				display2: '3.25rem', //text-size 52px
				display3: '35px', //text-size 35px
				display4: '1.5625rem', //text-size 25px
			}
     
    },
  },
  plugins: [],
}