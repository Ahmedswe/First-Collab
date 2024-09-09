const { transform } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Merging animations
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        bounceHero: 'bounceHero 5s ease-in-out infinite',
      },
      // Merging keyframes
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        bounceHero: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(50px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('daisyui')],
};
