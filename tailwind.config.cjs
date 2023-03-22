/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8A94A6',  
        'secondary': '#377DFF',  
        'primary-box': '#F0F5FA',  
        'primary-icon': '#C1C7D0',  
      },
    },
  },
  plugins: [],
}