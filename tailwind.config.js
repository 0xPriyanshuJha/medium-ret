/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': [ "google-sans", 'serif'],
        'secondary': ['Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        blue: '#ECF9FE',
        hola: "#23313C"
      }
    },
  },
  plugins: [],
}