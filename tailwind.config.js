module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: 'var(--fp-light)',
        dark: 'var(--fp-dark)',
        'fp-flashpub': 'var(--fp-flashpub)',
        'fp-outbreak': 'var(--fp-outbreak)',
        'fp-grey-light': 'var(--fp-grey-light)',
        'fp-grey-mid': 'var(--fp-grey-mid)',
        'fp-grey': 'var(--fp-grey)',
        'fp-info': 'var(--fp-info)',
        'fp-error': 'var(--fp-error)',
        'fp-success': 'var(--fp-success)',
        'fp-warning': 'var(--fp-warning)',
      },
      fontFamily: {
        // display: ['var(--eq-text-display)', 'cursive'],
        // body: ['var(--eq-text-body)', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
