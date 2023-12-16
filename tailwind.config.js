/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/**/*.{html,js}"],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },

  theme: {
    extend: {
      colors: {
        "main-theme": "#F2FFF2",
        "second-theme": "#709C6F",
        "third-theme": "#A8C791",
        "new-green": "#F2FFF2",
        gray: "#F7F7F7",
        sidegreen: "#F4FFED",
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      height: {
        128: "36rem",
      },
      width: {
        128: "38rem",
      },
      spacing: {
        128: "40rem",
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};