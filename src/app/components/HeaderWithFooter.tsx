'use client'

import { useEffect, useState } from 'react'
import Logo from './navigation/Logo'
import DropdownMenu from './navigation/DropdownMenu'
import P from './typography/P'

const HeaderWithFooter = () => {
  const [isAtBottom, setIsAtBottom] = useState(false)

  // Check if the user has scrolled to the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const pageHeight = document.body.scrollHeight

      // Expand when scrolled to the bottom, shrink when scrolling up
      setIsAtBottom(scrollPosition >= pageHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed bottom-0 left-0 right-0 w-full transition-all duration-300 ${
        isAtBottom ? 'h-56' : 'h-20'
      } z-50 bg-[#EAE6E3]`}
    >
      <div className="py-gapSpace flex items-center">
        <Logo />
        <DropdownMenu />
      </div>

      {/* Expanding Footer with contact information */}
      {isAtBottom && (
        <div className="bg-beige mx-auto flex flex-col items-center justify-center py-3">
          <div className="text-sm">
            <P>Kontakta oss:</P>
            <P>Email: info@dahliakliniken.se</P>
            <P>Telefon: 012-345 67 89</P>
          </div>
        </div>
      )}
    </header>
  )
}

export default HeaderWithFooter
