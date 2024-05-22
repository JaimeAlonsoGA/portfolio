/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Background': '#FAFAFA',
        'Plat': '#FCFFFC ',
        'Gray': '#DEE4E4',
        'Black': '#201E1F',
        'Orange': '#BD632F',
        'Forest': '#248232',
        'Yellow': "#F2E500",
        'Green': "#16C536",
        'LightGreen': "#4BE06E",
        'Red': '#FF4000',
        'LightRed': '#FFB39A',
        'Pink': '#F8B0BF',
        'Melon': '#FFB39A',
      }
    },
  },
  plugins: [],
}
