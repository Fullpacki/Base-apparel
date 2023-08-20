/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/images/bg-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
};
