/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2cbce9",
        red: "#ffbe0b",
        yellow: "#fdcc49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-gray": "#757575",
        "opaque-black": "rgba(0,0,0,0.3)",
      },
      backgroundImage: {
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      },
      fontFamily: {
        playfair: ["Playfair Display ", "serif"],
        opensans: ["Open Sans ", "sans-serif"],
      },
      content: {
        brush: 'url("assets/brush.png")',
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [],
};
