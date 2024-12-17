/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,sccs}",
  ],
  theme: {
    colors: {
      richblack: {
          100: "#cecfd1",
          200: "#494D54",
          300: "#1B2129",
          400: "#070d1a",
          500: "#080f17",
          600: "#060c12",
          700: "#05090e",
          800: "#030609",
          900: "#020305"
      },
      gainsboro: {
          100: "#f7f8fa",
          200: "#eff1f5",
          300: "#e6ebf0",
          400: "#dee4eb",
          500: "#d6dde6",
          600: "#abb1b8",
          700: "#80858a",
          800: "#56585c",
          900: "#2b2c2e"
      },
      royalorange: {
          100: "#fde8d9",
          200: "#fbd1b3",
          300: "#f9ba8e",
          400: "#f7a368",
          500: "#f58c42",
          600: "#c47035",
          700: "#935428",
          800: "#62381a",
          900: "#311c0d"
      },
    },
    extend: {
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

