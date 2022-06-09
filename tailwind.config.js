module.exports = {
  content: [
    "../mfe/**/src/**/*.{ts,tsx}",
    "../pf-react-comp/**/src/**/*.{ts,tsx}"
  ],
  theme: {
    fontFamily: {
      body: ['Poppins', 'sans-serif']
    },
    fontSize: {
      xs: ['.8rem', '1.3em'],
      sm: ['.85rem', '1.3em'],
      tiny: ['.9rem', '1.3em'],
      base: [
        'var(--font-size-base)',
        {
          lineHeight: '1.3em'
        }
      ],
      lg: ['1.05rem', '1.3em'],
      xl: ['1.17rem', '1.3em'],
      '2xl': ['1.2rem', '1.3em'],
      '3xl': ['1.3rem', '1.3em'],
      '4xl': ['1.4rem', '1.3em'],
      '5xl': ['1.5rem', '1.3em']
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)'
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)'
        },
        alternative: {
          DEFAULT: 'var(--color-alternative)'
        }
      }
    }
  },
  plugins: [],
}
