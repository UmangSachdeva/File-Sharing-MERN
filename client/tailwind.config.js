/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#0E2954",
        secondary: "#1F6E8C",
        body: "#2E8A99",
        light: "#84A7A1",
      },
      fontFamily: {
        libre: ['"Orbitron"', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "ping-fast": "ping-faster 0.9s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        "ping-faster": {
          "75%, 100%": { transform: "scale(1.5)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
