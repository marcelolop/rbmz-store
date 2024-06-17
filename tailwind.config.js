module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
        colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
      },
      transitionDuration: {
        1000: "1000ms",
        700: "700ms",
        500: "500ms",
      },
      transitionTimingFunction: {
        "in-out": "ease-in-out",
      },
    },
  },
  variants: {},
  plugins: [],
};