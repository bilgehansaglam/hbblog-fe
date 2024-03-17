/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        sans: ["Open Sans", "sans-serif"]
      },

    },
  },
  plugins: [],
  darkMode: 'class'
}