/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      blue:{
        "900":"#1174C2"
      },
      customSidebarBlue: "#1E2640",
      boxShadow: {
        'bottom-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        'calc100vwMinus224': 'calc(100vw - 224px)',
      }
    },
    },
  },
  plugins: [],
}