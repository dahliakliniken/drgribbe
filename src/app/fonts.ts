import { Josefin_Sans, Ephesis } from 'next/font/google'

export const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '700'],
  variable: '--font-josefin-sans'
})

export const ephesis = Ephesis({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ephesis'
})
