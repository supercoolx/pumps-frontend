/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        'laptop': '1441px',
        '3xl': '1700px'
      }
    },
  },
  plugins: [],
}

