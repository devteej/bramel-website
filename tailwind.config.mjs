/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bramel: {
          orange: "#E8792B",
          dark: "#333333",
          grey: "#666666",
          "light-grey": "#F5F5F5",
          "border-grey": "#E0E0E0",
        },
      },
      fontFamily: {
        sans: ["Barlow", '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
