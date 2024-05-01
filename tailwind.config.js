/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#FCFF6D',
        secondary: '#915DFF'
      },
      fontFamily:{
        Poppins: 'Poppins, sans-serif',
        RobotoMono: 'Roboto Mono, sans-serif'
      },
      screens:{
        toButton: '414px'
      }
    },
  },
  plugins: [],
}