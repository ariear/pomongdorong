/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'space-gretong' : ['"Space Grotesk"', 'sans-serif'],
        'pupi' : ['"Poppins"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

