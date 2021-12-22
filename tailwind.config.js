module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '130': '30rem',
        '150': '31.25rem',
        '200': '40rem',
        '210': '210vh',
        '250': '250vh',
        '270': '270vh'
      },
      width: {
        '130': '30rem',
        '150': '40rem'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/homedu.jpg')",
        'qr-code': "url('/src/assets/images/certificate_qr.jpg')"
      },
      textColor: {
        'teal': '#00AEAE',
        'green': '#81B622',
      },
      backgroundColor: {
        'green': '#5ceb4b',
        'success-green': '#c5f0c0',
        'weight-green': '#59981A',
        'teal': '#00AEAE',
        'weight-teal': '#008080',
        'logo-color': '#6800C2',
        'hero-color-1': '#BC0E4D',
        'hero-color-2': '#FE4B28',
        'hero-color-3': '#0E71D4',
      },
      fontFamily: {
        balsamiq: "'Balsamiq Sans'"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
