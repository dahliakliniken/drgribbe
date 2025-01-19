import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'fade-out-right': {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(10px)' }
        },
        'fade-in-bottom': {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-out-bottom': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(5px)' }
        }
      },
      animation: {
        'fade-in-right': 'fade-in-right 0.3s ease-out forwards',
        'fade-out-right': 'fade-out-right 0.3s ease-in forwards',
        'fade-in-bottom': 'fade-in-bottom 0.3s ease-out forwards',
        'fade-out-bottom': 'fade-out-bottom 0.3s ease-in forwards'
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        coral: '#B06D74',
        green: '#0C412F',
        beige: '#EAE6E3',
        grey: 'darkgrey'
      },
      fontFamily: {
        'josefin-sans': ['"Josefin Sans"', 'sans-serif']
      },
      backgroundColor: {
        'custom-dark': 'rgba(20, 20, 20, 0.8)'
      },
      backgroundImage: {
        'card-pattern': "url('/images/dalia_icon_white.svg')",
        'card-pattern-light': "url('/images/dalia_icon_beige.svg')",
        'custom-gradient': `linear-gradient(0deg, #EAE6E3, #EAE6E3), 
                              linear-gradient(177.97deg, rgba(213, 164, 168, 0.2) 55.19%, rgba(234, 230, 227, 0.2) 78.41%)`
      },
      backgroundSize: {
        '50': '50%',
        '100': '100%',
        '110': '110%',
        '200': '200%',
        '500': '500%'
      },
      backgroundPosition: {
        'small-left-top': '100% 50%',
        'large-left-top': '560% 100%',
        'small-right-top': '0% 50%',
        'small-center': '50% 50%',
        'small-left': '100% 50%',
        'large-left': '560% 50%',
        'small-right': '0% 50%',
        'large-right': '-450% 50%',
        'small-bottom-right': '0 100%',
        'small-bottom-left': '100% 100%'
      },
      spacing: {
        gapSpace: '1.5rem',
        gapSpaceL: '2.5rem'
      }
    }
  },
  plugins: []
}
export default config
