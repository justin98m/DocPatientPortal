/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Mukta', 'san-serif'],
    },
    screens: {
      sm: { max: '425px' },

      md: { min: '768px' },

      lg: { min: '1024px' },
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        boared: '#E4223B',
        boablue: '#04246C',
        accentgray: '#F5F5F5',
        accentdark: '#457B90',
        accentlight: '#A8DADC',
        accentlighter: '#F1FAEE',
      },
    },
    variants: {
      extend: {
        opacity: ['group-focus'],
        display: ['group-focus'],
        inset: ['group-focus'],
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
