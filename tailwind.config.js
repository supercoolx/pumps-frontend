/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    require('flowbite/plugin'),
    require("tw-elements/plugin.cjs")
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    fontFamily: {
      inter: [
        'Inter'
      ],
      league: [
        'League'
      ],
      molengo: [
        'Molengo'
      ],
      outfit: [
        'Outfit'
      ],
      palanquin: [
        'Palanquin'
      ],
    },
    extend: {
      colors: {
        primary: '#F7931A'
      },
      screens: {
        'mobile': '425px',
        'laptop': '1440px',
        '3xl': '1700px'
      }
    },
  },
  plugins: [],
}

