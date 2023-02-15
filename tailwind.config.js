/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.button-1': {
          'background-color': '#006d77',
          'color': '#83c5be',
          'padding': '.75rem 1.2rem',
          'border-radius': '2.25rem',
          'border': '1px solid #ccc',
          'cursor': 'pointer',
          'transition': 'background-color .2s ease-in-out',
          'width': 'max-content', // custom width value
          'display': 'inline-block', // custom display value
          '&:hover': {
            'background-color': '#d4d4d4',
          },
          '&:active': {
            'background-color': '#c3c3c3',
          },
        },
        '.button-2': {
          'background-color': '#83c5be',
          'color': '#006d77',
          'padding': '.75rem 1.2rem',
          'border-radius': '2.25rem',
          'border': '1px solid #ccc',
          'cursor': 'pointer',
          'transition': 'background-color .2s ease-in-out',
          'width': 'max-content', // custom width value
          'display': 'inline-block', // custom display value
          '&:hover': {
            'background-color': '#d4d4d4',
          },
          '&:active': {
            'background-color': '#c3c3c3',
          },
        },
        '.left-calc': {
          'left': 'calc(50% - 10rem)',
        },
        '.bg-primary': {
          'background-color': '#006d77',
        },
        '.bg-secondary': {
          'background-color': '#83c5be',
        },
        '.bg-light': {
          'background-color': '#edf6f9',
        },
        '.text-primary': {
          'color': '#006d77',
        },
        '.text-secondary': {
          'color': '#83c5be',
        },
        '.text-light': {
          'color': '#edf6f9',
        },
        '.border-primary': {
          'border-color': '#006d77',
        },
        '.border-secondary': {
          'border-color': '#83c5be',
        },
        '.border-light': {
          'border-color': '#edf6f9',
        },
      });
    },
  ],
}
