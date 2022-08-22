/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue', './src/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans'],
        'outfit': ['Outfit']
      }
    },
  },
  plugins: [],
}
