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

const FIREFOX_IOS_BOTTOM_BAR_HEIGHT = 72

export const HeaderWithFooter = () => {
  const t = useTranslations('contact')
  const pathname = usePathname()

  const [isAtBottom, setIsAtBottom] = useState(false)
  const [bottomOffset, setBottomOffset] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const firefoxIOS = useFirefoxIOS()

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)')

    const update = () => {
      const desktop = desktopQuery.matches
      setIsDesktop(desktop)

      if (desktop) {
        setBottomOffset(0)
      } else {
        const visualViewport = window.visualViewport
        let offset = 0

        if (visualViewport) {
          offset = Math.max(
            0,
            window.innerHeight -
              visualViewport.height -
              visualViewport.offsetTop
          )
        }

        if (firefoxIOS) {
          offset = Math.max(offset, FIREFOX_IOS_BOTTOM_BAR_HEIGHT)
        }

        setBottomOffset(offset)
      }

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

    update()

    desktopQuery.addEventListener('change', update)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    window.visualViewport?.addEventListener('resize', update)
    window.visualViewport?.addEventListener('scroll', update)

    return () => {
      desktopQuery.removeEventListener('change', update)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      window.visualViewport?.removeEventListener('resize', update)
      window.visualViewport?.removeEventListener('scroll', update)
    }
  }, [pathname, firefoxIOS])

  const headerHeightClass = isAtBottom ? 'h-52' : 'h-20'

  return (
    <header
      style={!isDesktop ? { bottom: bottomOffset } : undefined}
      className={classNames(
        'fixed right-0 left-0 z-50 w-full bg-beige transition-[height] duration-300',
        'lg:top-0 lg:bottom-auto',
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
  )
}
