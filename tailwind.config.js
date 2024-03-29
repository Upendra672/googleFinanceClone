/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-pattern': "url('./src/assets/homepattern.svg')"
      }
    },
  },
  plugins: [],
}

