/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'tektur': 'Tektur, sans-serif',
      'guerrilla': '"Protest Guerrilla", sans-serif',
      'monoton': 'Monoton, sans-serif',
      'sansita': '"Sansita Swashed", sans-serif',
      'tangerine': 'Tangerine, cursive'
  },
    extend: {},
  },
  plugins: [],
}

