/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
    },
    spacing: {
      '1/4': '25%',
      '3/4': '75%',
    },
  },
  plugins: [],
}
}
