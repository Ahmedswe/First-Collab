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
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        bounceHero: 'bounceHero 5s ease-in-out infinite',
      },
      keyframes: {
        bounceHero: {
          '0%': { transform: 'translateY(0)'   },
          '50%': { transform: 'translateY(50px) ' },
          '100%': { transform: 'translateY(0) ' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}