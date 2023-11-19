/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primBlack: "#050206",
        primCoral: "#9A8174",
        primGray: "#3B3B3B",
        darkNavy: "#020c1b",
        navy: "#0a192f",
        lightNavy: "#112240",
        darkSlate: "#495670",
        slate: "#8892b0",
        lightSlate: "#a8b2d1",
        lightestSlate: "#ccd6f6",
        white: "#e6f1ff",
        green: "#64ffda",
        blue: "#57cbff",
        pink: "#f57dff",
      },
      fontFamily: {
        alex: "Alex Brush",
      },
    },
  },
  plugins: [],
};
