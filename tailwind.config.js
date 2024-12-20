/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6B6B",
          50: "#FFF1F1",
          100: "#FFE1E1",
          200: "#FFC7C7",
          300: "#FFA0A0",
          400: "#FF6B6B",
          500: "#F83B3B",
          600: "#E51D1D",
          700: "#C11414",
          800: "#A01414",
          900: "#841818",
        },
        secondary: {
          DEFAULT: "#4ECDC4",
          50: "#F0FDFB",
          100: "#CCFBF5",
          200: "#99F3EA",
          300: "#4ECDC4",
          400: "#2CB3AA",
          500: "#1C938B",
          600: "#197872",
          700: "#1A605B",
          800: "#1A4D4A",
          900: "#193F3D",
        },
        accent: {
          DEFAULT: "#FFE66D",
          50: "#FEFCE8",
          100: "#FFF9C2",
          200: "#FFE66D",
          300: "#FFD43B",
          400: "#FABE0B",
          500: "#F59F00",
          600: "#E67700",
          700: "#BF5600",
          800: "#9A4200",
          900: "#7E3600",
        },
      },
    },
  },
  plugins: [],
};
