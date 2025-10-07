module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0e0e10",
        gray: { DEFAULT: "#1f1f22", 900: "#1f1f22" },
        red: { DEFAULT: "#c1121f" },
        white: "#ffffff"
      }
    }
  },
  plugins: []
};
