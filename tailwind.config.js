/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      borderWidth: {
        6: "6px",
      },
      colors: {
        primary: "#4BAC87",
        secondary: "#222E29",
        accent: {
          hover: "#318565",
          placeholder: "#737A77",
          warning: "#E7745E",
        },
      },
      fontFamily: {
        georgia: ["Georgia", "Times New Roman", "Times, serif"],
        verb: ["Verb"],
      },
      fontWeight: {
        "ultra-bold": "950",
      },
      fontSize: {
        "5.5xl": "52px",
      },
    },
  },
  plugins: [],
};
