/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'power-up': "url('./public/power-up-1.png')",
        'power-up-2': "url('./public/power-up-2.png')",
        'power-up-3': "url('./public/power-up-3.png')"
      },
      colors: {
        blue: "#0918CC",
        white: "#FFFFFF",
        black: "#000000",
        gray: "#F5F5F5",
        gray_50: "#515151",
        dark_gray: "#989898",
        deep_gray: "#0918CC"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px"
    }
  },
  plugins: [],
}

