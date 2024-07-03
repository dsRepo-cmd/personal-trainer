/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1170px",
        xl: "1279px",
        lg: "1023px",
        sm: "639px",
        md: "767px",
      },
      maxWidth: "100%",
    },

    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "836px" },

      sm: { max: "639px" },

      exsm: { max: "380px" },
    },

    extend: {
      fontSize: {
        sm: "13px",
      },
      fontFamily: {
        primary: ["var(--font-primary)"],
        secondary: ["var(--font-secondary)"],
        default: ["var(--font-primary)"],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        bg: "var(--bg)",
        dark: "var(--dark)",
      },

      backgroundImage: {},
      keyframes: {
        jello_horizontal: {
          "0%": {
            transform: "scale3D(1, 1, 1)",
          },
          "30%": {
            transform: "scale3D(1.25, 0.75, 1)",
          },
          "40%": {
            transform: "scale3D(0.75, 1.25, 1)",
          },
          "50%": {
            transform: "scale3D(1.15, 0.85, 1)",
          },
          "65%": {
            transform: "scale3D(0.95, 1.05, 1)",
          },
          "75%": {
            transform: "scale3D(1.05, 0.95, 1)",
          },
          "100%": {
            transform: "scale3D(1, 1, 1)",
          },
        },
      },
      animation: {
        jello_horizontal: "jello_horizontal 0.9s both",
      },
    },
  },
  plugins: [],
};
