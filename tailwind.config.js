/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#000000",
          100: "#000000",
          200: "#000000",
          300: "#C5DFF3",
          400: "#000000",
          500: "#4F8FDA",
          600: "#000000",
          700: "#142B72",
          800: "#000000",
          900: "#000000",
        },
        secondary: {
          50: "#000000",
          100: "#000000",
          200: "#000000",
          300: "#000000",
          400: "#000000",
          500: "#4ECE3D",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        accent: {
          50: "#000000",
          100: "#000000",
          200: "#000000",
          300: "#000000",
          400: "#000000",
          500: "#4ECE3D",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
