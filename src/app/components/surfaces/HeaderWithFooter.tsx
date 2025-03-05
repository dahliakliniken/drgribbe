'use client'

import { useEffect, useState } from 'react'
import { Logo } from '../navigation/Logo'
import { DropdownMenu } from '../navigation/DropdownMenu'
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
      className={`fixed right-0 bottom-0 left-0 w-full transition-all lg:top-0 ${
        isAtBottom ? 'h-40' : 'h-20'
      } bg-beige z-50`}
    >
      <div className="p-gapSpace flex items-center md:p-4">
        <Logo />
        <DropdownMenu />
      </div>

      {/* Expanding Footer with contact information */}
      {isAtBottom && (
        <div className="bg-beige mx-auto flex flex-col items-center justify-center pb-3 lg:pr-16">
          <div className="flex flex-col text-center text-sm">
            <span>{t('contact.contactUs')}</span>
            <span>
              {t.rich('contact.email', {
                email: (chunks) => (
                  <a href="mailto:info@drgribbe.se">{chunks}</a>
                )
              })}
            </span>
            <span>{t('contact.phone')}</span>
          </div>
        </div>
      )}
    </header>
  )
}
