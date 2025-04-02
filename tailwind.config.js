/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fost-primary": "#36a34e",
        "fost-secondary": "#578c37",
        "fost-bg": "#f7f9ed",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
