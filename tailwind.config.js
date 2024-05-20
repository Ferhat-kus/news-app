/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        placeholderAndUnderline: "var(--lightGray)",
        gradientForm: "var(--champagne)",
        gradientVia: "var(--veryLightCream)",
        gradientTo: "var(--lightPink)",
        copper: "var(--copper)",
        titleAndArticles: "var(--titleAndArticles)",
        newsTypeText: "var(--lightBlue)",
      },
    },
  },
  plugins: [],
};
