/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          DEFAULT: "#121417",
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
        rose: "#F75590",
        indigo: "#AFA2FF",
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
};
