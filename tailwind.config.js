/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.HTML", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "bg-tryMe": "url('./src/assets/bg-tryMe.png')",
      },
      colors: {
        mainColor: "#5bc4cf",
        gray: "#92929D",
      },
    },
  },
  plugins: [],
};
