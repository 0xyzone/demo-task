/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-orange': '#E0672E',
        'dark-blue' : '#294b9b'
      },
      backgroundImage: {
        'plumbing-home': "url('/public/images/plumbing-home.jpg')",
        'plumbing': "url('/public/images/PLUMBING.jpg')",
        'requestQuote': "url('/public/images/p5.jpg')",
      },
    },
  },
  plugins: [],
}