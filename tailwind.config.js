/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx,css}",
      "./node_modules/flowbite/**/*.js"
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'navbar': '#070707',
          'yellow': '#Fcff00',
          'dark': '#010000',
        },
        fontFamily: {
          sans: ['IBM Plex Sans', 'sans-serif'],
          'plex-condensed': ['IBM Plex Sans Condensed', 'sans-serif'],
          serif: ['Roboto', 'serif'],
        },
      },
    },
    plugins: [
      require('flowbite/plugin')
    ]
}
  