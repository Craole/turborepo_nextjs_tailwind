const { red } = require('tailwindcss/colors');

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    '../../apps/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}