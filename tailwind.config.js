/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '38': '152px',
        '0.6':'1px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

