/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "Almost-White": "hsl(0, 0%, 98%)",
      "Medium-Gray": "hsl(0, 0%, 41%)",
      "Almost-Black": "hsl(0, 0%, 8%)",
    },
    boxShadow : {
      "small": "hsla(0, 0%, 0%, 0.8)",
    },
    extend: {},
  },
  plugins: [],
};
