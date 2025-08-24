/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: {
          200: "#FFDAB9",
          300: "#FFB07C",
        },
      },
    },
  },
  plugins: [],
};