/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        arefRuqaa: ['Aref Ruqaa', 'serif'],
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
    colors: {
      'pale-grey': 'rgba(30, 30, 30, 0.51)',
      'the-purplest': 'rgba(57, 0, 130, 0.59)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
