/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#c9a24d",
        dark: "#0b0b0b",
      },
    },
  },
  plugins: [],
};
