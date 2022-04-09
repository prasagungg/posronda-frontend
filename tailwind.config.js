module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
      bigMobile: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      screens: {
        sm: "425px",
        md: "767px",
        lg: "767px",
        xl: "767px",
        "2xl": "767px",
      },
    },
    fontFamily: {
      grape: "Grape Nuts",
    },
    colors: {
      "dark-gray": "#222831",
      "primary-gray": "#393E46",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
