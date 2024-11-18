'use client'

import { useEffect, useState } from 'react'
import { Logo } from '../navigation/Logo'
import { DropdownMenu } from '../navigation/DropdownMenu'
import { P } from '../typography/P'
import { useTranslations } from 'next-intl'

export const HeaderWithFooter = () => {
  const t = useTranslations()
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
      <div className="flex items-center p-gapSpace">
        <Logo />
        <DropdownMenu />
      </div>

      {/* Expanding Footer with contact information */}
      {isAtBottom && (
        <div className="mx-auto flex flex-col items-center justify-center bg-beige py-3">
          <div className="text-center text-sm">
            <P>{t('contact.contactUs')}</P>
            <P>
              {t.rich('contact.email', {
                email: (chunks) => (
                  <a href="mailto:info@dahliakliniken.se">{chunks}</a>
                )
              })}
            </P>
            <P>{t('contact.phone')}</P>
          </div>
        </div>
      )}
    </header>
  )
}
