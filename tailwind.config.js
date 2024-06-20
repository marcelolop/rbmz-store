module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
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