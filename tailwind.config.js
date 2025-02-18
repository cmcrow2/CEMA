/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

const pixelValues = [...Array(200).keys()].map((x) => ++x);
const pixelSafelist = [];
pixelValues.forEach((value) => {
  pixelSafelist.push(`h-[calc(100vh-${value}px)]`);
  pixelSafelist.push(`xl:h-[calc(100vh-${value}px)]`);
});

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: pixelSafelist,
  theme: {
    fontFamily: {
      courier: ["Courier", "sans-serif"],
      major: ["Major Mono Display"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          DEFAULT: "#121417",
          700: "#818C9C",
          800: "#3F4650",
          900: "#363C45",
        },
        mint: {
          DEFAULT: "#F4F7F5",
          100: "#E7EFEB",
          200: "#DAE7E0",
          300: "#CEDFD6",
          400: "#C1D7CB",
          500: "#B4CFC0",
          600: "#A8C7B6",
          700: "#9BBFAC",
          800: "#8FB7A2",
          900: "#83AF98",
        },
        sand: {
          DEFAULT: "#CF995F",
          100: "#FAF5EF",
          200: "#F5ECE0",
          300: "#F0E2D1",
          400: "#EBD8C1",
          500: "#E6CFB2",
          600: "#E1C5A3",
          700: "#DCBB93",
          800: "#D7B284",
          900: "#D2A874",
        },
        yellow: {
          DEFAULT: "#F5C43D",
          100: "#FEF9EC",
          200: "#FDF3D8",
          300: "#FCEDC5",
          400: "#FBE7B1",
          500: "#FAE19E",
          600: "#F9DC8B",
          700: "#F8D677",
          800: "#F7D064",
          900: "#F6CA51",
        },
        blue: {
          DEFAULT: "#51AFE1",
          100: "#EDF7FC",
          200: "#DCEFF9",
          300: "#CBE7F6",
          400: "#BADFF3",
          500: "#A8D7F0",
          600: "#96CFED",
          700: "#85C7EA",
          800: "#73BFE7",
          900: "#62B7E4",
        },
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
});
