/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Plat': '#FCFFFC ',
        'Gray': '#DEE4E4',
        'Black': '#201E1F',
        'Orange': '#BD632F',
        // 'Green': '#2BA84A',
        'Forest': '#248232',
        'Yellow': "#F2E500",
        'Green': "#16C536",
        'Red': '#FF4000',
        'LightRed': '#FFB39A',
      }
    },
  },
  plugins: [],
}
