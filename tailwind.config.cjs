module.exports = {
  darkMode: ["class"],
  content: ["./src/renderer/**/*.{js,jsx,ts,tsx,html,css}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1A2035",
        secondary: "#D21F3C",
        success: "#2B9355",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
