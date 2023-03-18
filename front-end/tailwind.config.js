module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      md: "400px",
      md2: "700px",
      md3: "820px",
      md4: "1000px",
      lg: "1359px",
    },
    fontSize: {
      xm: "0.75em",
      sm: "0.85em",
      md: "0.95em",
    },
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp"),
  ],
};
