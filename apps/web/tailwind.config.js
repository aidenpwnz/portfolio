/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("./styles/styles.presets.js")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "../../libs/ui/fragments/**/*.{js,ts,js,tsx}",
    "../../libs/ui/components/**/*.{js,ts,js,tsx}",
    "../../libs/ui/typography/**/*.{js,ts,js,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
