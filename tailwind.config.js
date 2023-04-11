/** @type {import('tailwindcss').Config} */
export default {

  content: [  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors:{
      "primary1":"#0FCFEC",
      "secondary1":"#19D3AE",
      "third":"#3A4256",
      "gr":"bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] "
    }
  },
  plugins: [require("daisyui"),
  require('flowbite/plugin')],
}

