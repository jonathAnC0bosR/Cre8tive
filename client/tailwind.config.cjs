/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        df4088: "#DF4088",
        353434: "#353434",
      },
      blur: {
        xs: '1.5px',
      }
    },
  },
  plugins: [],
}
