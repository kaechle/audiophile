const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: ["./dist/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Manrope", "system-ui"],
      serif: ["Manrope", "system-ui"]
    },
    extend: {
      colors: {
        dark: {
          100: "#000000",
          200: "#101010"
        },
        light: {
          100: "#ffffff",
          200: "#fafafa",
          300: "#f1f1f1"
        },
        accent: {
          100: "#d87d4a",
          200: "#fbaf85"
        }
      }
    }
  },
  plugins: []
}
