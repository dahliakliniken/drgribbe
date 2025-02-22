import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin-sans': ['"Josefin Sans"', 'sans-serif']
      },
      backgroundColor: {
        'custom-dark': 'rgba(20, 20, 20, 0.8)'
      },
      backgroundImage: {
        'card-pattern': "url('/images/dalia_icon_white.svg')",
        'card-pattern-light': "url('/images/dalia_icon_beige.svg')",
        'custom-gradient': `linear-gradient(180deg, rgba(234,215,212,1) 0%, rgba(234,230,227,1) 80%)`,
        'custom-gradient-desktop': `linear-gradient(180deg, rgba(234,230,227,1) 0%, rgba(234,215,212,1) 80%)`
      }
    }
  },
  plugins: []
}
export default config
