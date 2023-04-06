/** @type {import('tailwindcss').Config} */
export default {

  content: [  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors:{
      "primary1":"#0FCFEC",
      "secondary1":"#19D3AE",
      "third":"#3A4256"
    }
  },
  plugins: [require("daisyui")],
}

