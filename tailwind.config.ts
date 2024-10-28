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
        foreground: 'var(--foreground)'
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
        '200': '200%'
      },
      backgroundPosition: {
        'right-50': '-50%',
        'left-100': '100%'
      }
    }
  },
  plugins: []
}
export default config
