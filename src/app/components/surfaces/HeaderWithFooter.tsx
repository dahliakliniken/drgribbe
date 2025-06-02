'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Button } from '../inputs/Button'
import { DropdownMenu } from '../navigation/DropdownMenu'
import { Logo } from '../navigation/Logo'
import { SocialMediaLinks } from './SocialMediaLinks'

export const HeaderWithFooter = () => {
  const t = useTranslations()
  const pathname = usePathname()
  const [isAtBottom, setIsAtBottom] = useState(false)

  // Check if the user has scrolled to the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const pageHeight = document.body.scrollHeight
      const isScrollable = pageHeight > window.innerHeight

      // Expand only when scrollable and scrolled to bottom
      setIsAtBottom(isScrollable && scrollPosition >= pageHeight)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // initialize on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Recalculate on route change to reset footer state on short pages
  useEffect(() => {
    const pageHeight = document.body.scrollHeight
    const isScrollable = pageHeight > window.innerHeight
    const scrollPosition = window.scrollY + window.innerHeight
    setIsAtBottom(isScrollable && scrollPosition >= pageHeight)
  }, [pathname])

  return (
    <header
      className={`fixed right-0 bottom-0 left-0 w-full transition-all lg:top-0 ${
        isAtBottom ? 'h-52' : 'h-20'
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
                  <a href="mailto:info@dahliakliniken.se">{chunks}</a>
                )
              })}
            </span>
            <span>{t('contact.phone')}</span>
            <Button
              className="justify-center text-sm underline"
              inverted
              textButton
              onClick={() => window.CookieScript?.instance?.show()}
            >
              {t('contact.handleCookies')}
            </Button>
            <SocialMediaLinks className="justify-center pt-2" />
          </div>
        </div>
      )}
    </header>
  )
}
