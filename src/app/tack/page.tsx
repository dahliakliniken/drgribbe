import { Metadata } from 'next'

import { Tack } from '@/app/tack/Tack'

export const metadata: Metadata = {
  title: 'Tack för din bokning - Dahliakliniken',
  description:
    'I alla priser ingår allt såsom narkos, implantat, övernattning och återbesök.',
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    title: 'Tack för din bokning - Dahliakliniken',
    description:
      'I alla priser ingår allt såsom narkos, implantat, övernattning och återbesök.'
  },
  twitter: {
    title: 'Tack för din bokning - Dahliakliniken',
    description:
      'I alla priser ingår allt såsom narkos, implantat, övernattning och återbesök.'
  }
}

function TackPage() {
  return <Tack />
}

export default TackPage
