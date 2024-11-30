/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#50d0ff',
        customPurple: '#ba68c8'
      },

      fontFamily: {
        Micro: ['"Micro 5", sans-serif'],
        Manrope: ['"Manrope", sans-serif'],
      },

      fontSize: {
        'h1': ['8rem', { lineHeight:'2.2', letterSpacing: '0.01em'}],
        'h1-lg': ['8rem', { lineHeight:'2', letterSpacing: '0.01em'} ],
        'h2': ['6rem', {lineHeight: '1.5', letterSpacing: '0.01em'}],
        'h3-lg': ['4rem', {lineHeight: '1.5', letterSpacing: '0.01em'}],
        'h3': ['3rem', {lineHeight: '1.5', letterSpacing: '0.01em'}],
        'h4': ['2rem', {lineHeight: '1.5', letterSpacing: '0.01em'}],
        'h5': ['4rem', {lineHeight: '1.5', letterSpacing: '0.01em'}],
        
      }
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '820px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

    }
  },
  plugins: [
    function ({addComponents}) {
      addComponents({
        'h1': {
          '@apply font-Micro text-h1': {},
          '@screen lg': {
          '@apply text-h1-lg': {},
          }
        },

        'h2': {
          '@apply font-Manrope text-h1': {},
          '@screen lg': {
          '@apply text-h2': {},
          }
        },

        'h3': {
          '@apply font-Manrope text-h1': {},
          '@screen lg': {
          '@apply text-h3': {},
          }
        },

        'h4': {
          '@apply font-Manrope text-h1': {},
          '@screen lg': {
          '@apply text-h4': {},
          }
        },

        'h5': {
          '@apply font-Micro text-h1': {},
          '@screen lg': {
          '@apply text-h5': {},
          }
        },
        
      })
    }
  ],

  
}

