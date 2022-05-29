module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#644F9C",
          secondary: "#FF6F00",
          accent: "#96A7FF",
          neutral: "#404040",
          "base-100": "#F2F2F2",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#E2AF29",
          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
