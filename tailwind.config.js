module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mediumTurquoise: '#50CECE',
        blueGreenTurquoise: '#65D4D3',
        middleBlueGreen: '#92E0DE',
        blizzardBlue: '#B5EAEA',
        powderBlue: '#C3EDE9',
        lightCyan: '#D1F0E8',
        honeydew: '#EDF6E5',
        mistyRose: '#F6D9D1',
        spanishPink: '#FFBCBC',
        mauvelous: '#F9A4AE',
        salmonPink: '#F592A4',
        pinkSherbet: '#F27F95',
        ultraRed: '#EF6B86',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
