import forms from "@tailwindcss/forms";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "!./blog/*"],
  theme: {
    extend: {
      spacing: {
        "1/4": "25%",
        "3/4": "75%",
      },
      colors: {
        customgray: "#8392a7",
        slate: "#8892b0",
        lightslate: "#a8b2d1",
        green: "#64ffda",
        teal: {
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
        },
      },
    },
    plugins: [forms],
  },
};
