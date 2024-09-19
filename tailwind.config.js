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
        white: {
          DEFAULT: "#F4F7F5",
          200: "#D0DCD4",
          300: "#5F816B",
        },
        pink: "#EF476F",
      },
    },
  },
  plugins: [],
};
