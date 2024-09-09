/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mycolor: "#E38E94",
        dashbord: "#6A0DAD",
        a: "#4a90e2",

        b: "#5bc0de",

        c: "#f0ad4e",
        d: "#5cb85c",

        blue1: "#4a90e2",
        green1: "#5cb85c",
        yellow1: "#f0ad4e",
        red1: "#FF6F61",
        purple1: "#6A0DAD",
      },
      transitionDuration: {
        600: "600ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out",
      },
      scrollbar: {
        hide: "overflow-hidden",
      },

      spacing: {
        30: "7rem",
      },
      width: { w1: "600px" },
      padding: { p1: "10px" },
      margin: { m1: "10px" },
      borderColor: {
        a: "#4a90e2",

        b: "#5bc0de",

        c: "#f0ad4e",
        d: "#5cb85c",
      },
    },
  },
  plugins: [],
};
