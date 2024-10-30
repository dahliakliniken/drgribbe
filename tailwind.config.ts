import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        coral: '#B06D74',
        green: '#0C412F',
        beige: '#EAE6E3'
      },
      fontFamily: {
        'josefin-sans': ['"Josefin Sans"', 'sans-serif']
      },
      backgroundImage: {
        'card-pattern': "url('/images/dalia_icon_white.svg')"
      },
      backgroundSize: {
        '50': '50%',
        '100': '100%',
        '110': '110%',
        '200': '200%',
        '500': '500%'
      },
      backgroundPosition: {
        'right-50': '-50%',
        'left-100': '100%'
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
