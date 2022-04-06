// const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  // purge: ["./serc/**/*.{js,jsz,ts,tsx}", ".public/index"],
  // darkMode: false, // or 'media' or 'class'
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
        success: "#50cd89",
        // gray: colors.gray,
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e538",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
