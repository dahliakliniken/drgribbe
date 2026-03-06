import { Metadata } from 'next'

import { Tack } from '@/app/tack-for-din-bokning/Tack'

// TODO: Change the metadata to be more specific to the tack page

export const metadata: Metadata = {
  title: 'Tack för din bokning - Dahliakliniken',
  robots: {
    index: false,
    follow: false
  }
}

function TackPage() {
  return <Tack />
}

export default TackPage
