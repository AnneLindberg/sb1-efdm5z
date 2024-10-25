/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sepia: {
          50: '#FCF9F3',
          100: '#F5EDE0',
          200: '#EBD9C3',
          300: '#DFC2A1',
          400: '#D3AB80',
          500: '#C79460',
          600: '#B67D45',
          700: '#956539',
          800: '#745030',
          900: '#533A23',
        },
        warmGray: {
          50: '#FAF9F7',
          100: '#E8E6E1',
          200: '#D3CEC4',
          300: '#B8B2A7',
          400: '#A39E93',
          500: '#857F72',
          600: '#625D52',
          700: '#504A40',
          800: '#423D33',
          900: '#27241D',
        },
      },
    },
  },
  plugins: [],
};