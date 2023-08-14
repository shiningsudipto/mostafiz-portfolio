/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#FF9800',
        secondaryColor: '#6F34FE',
        subtitleColor: '#743BFE',
        titleColor: '#3F396D',
        textColor: '#8C8797'
      },
      fontFamily: {
        Josefin: 'Josefin Sans',
        Lato: 'Lato'
      }
    },
  },
  plugins: [require("daisyui")],
}

