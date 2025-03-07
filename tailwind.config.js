/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        customBlue: '#50d0ff',
        customPurple: '#ba68c8'
      },
      cursor: {
      'default': 'url("/webcursor.svg"), auto', 
      'hover': 'url("/webpointer.svg"), pointer',
      },

      fontFamily: {
        Dos: ['PerfectDOSVGA437', 'monospace'],
      },

      fontSize: {
        'h1': ['8rem', { lineHeight:'2.2', letterSpacing: '0.01em'}],
        'h1-lg': ['8rem', { lineHeight:'2', letterSpacing: '0.01em'} ],
        'h2': ['6rem', {lineHeight: '1.5', letterSpacing: '0.01em'}],
        'h3-lg': ['4rem', {lineHeight: '1.5', letterSpacing: '0.01em'}],
        'h3': ['3rem', {lineHeight: '1.5', letterSpacing: '0.01em'}],
        'h4': ['2rem', {lineHeight: '1.5', letterSpacing: '0.01em'}],
        'h5': ['1rem', {lineHeight: '1.5', letterSpacing: '0.01em'}],
      }, 
      // this is the ease in effect on the about page's goal section
      theme: {
        extend: {
          animation: {
            fadeIn: 'fadeIn 1s ease-out forwards',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
          },
        },
      },
      plugins: [],
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '820px',
      // => @media (min-width: 768px) { ... }

      'lp': '1280px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1920px',
      // => @media (min-width: 1920px) { ... }

    }

    
  },
  plugins: [
    function ({addComponents}) {
      addComponents({
        'h1': {
          '@apply font-Dos text-h1': {},
          '@screen lg': {
          '@apply text-h1-lg': {},
          }
        },

        'h2': {
          '@apply font-Dos text-h1': {},
          '@screen lg': {
          '@apply text-h2': {},
          }
        },

        'h3': {
          '@apply font-Dos text-h1': {},
          '@screen lg': {
          '@apply text-h3': {},
          }
        },

        'h4': {
          '@apply font-Dos text-h1': {},
          '@screen lg': {
          '@apply text-h4': {},
          }
        },

        'h5': {
          '@apply font-Dos text-h1': {},
          '@screen lg': {
          '@apply text-h5': {},
          }
        },
        
      })
    }
  ],

  

  
}

