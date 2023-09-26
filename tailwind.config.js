/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/public/Resources/Rectangle-4281.png')",
      },
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

