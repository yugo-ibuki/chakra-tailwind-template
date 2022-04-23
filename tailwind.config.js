module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/**/*.{ts,tsx}', './src/style/global.css'],
  darkMode: false,
  theme: {
    screens: {
      sp: { max: '768px' },
      // --------------------------------------------------
      // tailwind default
      // --------------------------------------------------
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {}
  },
  variants: {},
  plugins: [],
}