/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans'],
        montserrat: ['Montserrat', 'sans'],
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans'],
        merriweather: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
