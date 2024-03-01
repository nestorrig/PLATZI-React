/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: {
            100: "#E74C3C",
            200: "#ff7f67",
            300: "#ffe6c7",
          },
          accent: {
            100: "#C0392B",
            200: "#ffd0b2",
          },
          text: {
            100: "#FFFFFF",
            200: "#e0e0e0",
          },
          bg: {
            100: "#1E1E1E",
            200: "#2d2d2d",
            300: "#454545",
          },
        },
        light: {
          primary: {
            100: "#EF5350",
            200: "#ff867c",
            300: "#ffeede",
          },
          accent: {
            100: "#FFCDD2",
            200: "#9a6d72",
          },
          text: {
            100: "#212121",
            200: "#484848",
          },
          bg: {
            100: "#EFEFEF",
            200: "#e5e5e5",
            300: "#bdbdbd",
          },
        },
      },
      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
  darkMode: "class",
};
