/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans"],
      },
      screens: {
        sm: "640px", // Define o ponto de interrupção personalizado para telas pequenas (sm)
      },
    },
    plugins: [],
  },
};
