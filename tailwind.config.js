const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'light-mode': { raw: '(prefers-color-scheme: light)' }
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
}