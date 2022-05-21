module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        jarinsParlour: {

          "primary": "#FFFFFF",

        "secondary": "#474747",

          "accent": "#F63E7B",

          "neutral": "#111430",

          "base-100": "#FFF8F5",

          "info": "#FF4545",

          "success": "#009444",

          "warning": "#FFBD3E",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}