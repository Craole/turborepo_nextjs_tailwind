module.exports = {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    // '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [
    require('conf_tailwind/tailwind.config')
  ]
}