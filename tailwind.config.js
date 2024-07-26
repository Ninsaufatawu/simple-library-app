/** @type {import('tailwindcss').Config} */
export default {
  content: [
            "./src/**/*.{js,jsx,ts,tsx}",
            "./app/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        pink: "var(--primary-pink)",
        gray: "var(--primary-gray)",
        white: "var(--white)",
        black: "var(--black)",
        dark: "var(--primary-dark)",
      },
    },
  },
  plugins: [],
}

