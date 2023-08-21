/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
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
  plugins: [
    require('flowbite/plugin')
  ],
}
