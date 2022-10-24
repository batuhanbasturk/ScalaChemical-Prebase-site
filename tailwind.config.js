/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        image: "#028d43",
        primary: {
          100: "#E3FDFD",
          200: "#109be8",
          300: "#DAE5D0",
          400: "#256D85",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
