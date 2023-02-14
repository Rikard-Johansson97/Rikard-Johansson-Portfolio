/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#16161a",
        lightBackground: "#1d1d1d",
        headline: "#fffffe",
        paragraph: "#94a1b2",
        button: "#7f5af0",
        buttonText: "#fffffe",
        highlight: "#7f5af0",
        greenText: "#2cb67d",
      },
      gridTemplateColumns: {
        "auto-fill-200": "repeat(auto-fill, minmax(200px, 1fr))",
        "auto-fit-200": "repeat(auto-fit, minmax(200px, 1fr))",
      },
      aspectRatio: {
        "19/16": "19 / 16",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        shape: "30% 70% 55% 45% / 32% 34% 66% 68%",
      },
      display: ["group-hover"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
