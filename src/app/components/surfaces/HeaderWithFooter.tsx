'use client'

import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { useFirefoxIOS } from '@/utils/browser'

import { Button } from '../inputs/Button'
import { DropdownMenu } from '../navigation/DropdownMenu'
import { Logo } from '../navigation/Logo'
import { SocialMediaLinks } from './SocialMediaLinks'

export const HeaderWithFooter = () => {
  const t = useTranslations('contact')
  const pathname = usePathname()

  const [isAtBottom, setIsAtBottom] = useState(false)
  const firefoxIOS = useFirefoxIOS()

  useEffect(() => {
    const handleScroll = () => {
      const scrollingElement =
        document.scrollingElement ?? document.documentElement

      const scrollTop = scrollingElement.scrollTop
      const pageHeight = scrollingElement.scrollHeight
      const viewportHeight =
        window.visualViewport?.height ?? window.innerHeight

      const threshold = 8
      const isScrollable = pageHeight > viewportHeight + threshold
      const hasReachedBottom =
        scrollTop + viewportHeight >= pageHeight - threshold

      setIsAtBottom(isScrollable && hasReachedBottom)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    window.visualViewport?.addEventListener('resize', handleScroll)
    window.visualViewport?.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      window.visualViewport?.removeEventListener('resize', handleScroll)
      window.visualViewport?.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  const headerHeightClass = isAtBottom ? 'h-52' : 'h-20'

  const mobileSpacerClass = firefoxIOS
    ? isAtBottom
      ? 'h-[calc(13rem+72px)]'
      : 'h-[calc(5rem+72px)]'
    : headerHeightClass

  return (
    <>
      <header
        className={classNames(
          'fixed right-0 left-0 z-50 w-full bg-beige transition-[height] duration-300',
          'lg:top-0 lg:bottom-auto',
          firefoxIOS ? 'max-lg:bottom-[72px]' : 'max-lg:bottom-0',
          headerHeightClass
        )}
      >
        <div className="p-gapSpace flex items-center md:p-4">
          <Logo />
          <DropdownMenu />
        </div>

        {isAtBottom && (
          <div className="bg-beige mx-auto flex flex-col items-center justify-center pb-[calc(0.75rem+env(safe-area-inset-bottom))] lg:pr-16">
            <div className="flex flex-col text-center text-sm">
              <span>{t('contactUs')}</span>
              <span>
                {t.rich('email', {
                  email: (chunks) => (
                    <a href="mailto:info@dahliakliniken.se">{chunks}</a>
                  )
                })}
              </span>
              <span>{t('phone')}</span>
              <Button
                className="justify-center text-sm underline"
                inverted
                textButton
                onClick={() => window.CookieScript?.instance?.show()}
              >
                {t('handleCookies')}
              </Button>
              <SocialMediaLinks className="justify-center pt-2" />
            </div>
          </div>
        )}
      </header>
      <div
        aria-hidden
        className={classNames(
          'pointer-events-none shrink-0 transition-[height] duration-300 lg:hidden',
          mobileSpacerClass
        )}
      />
    </>
  )
}
