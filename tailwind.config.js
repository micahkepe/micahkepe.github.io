/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        "1/4": "25%",
        "3/4": "75%",
      },
      colors: {
        'slate': "#8892b0",
        'green': "#64ffda",
        'teal': {
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"),
    ],
  },
};
