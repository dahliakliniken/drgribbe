'use client'

import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { type CSSProperties, useEffect, useState } from 'react'

import { Button } from '../inputs/Button'
import { DropdownMenu } from '../navigation/DropdownMenu'
import { Logo } from '../navigation/Logo'
import { SocialMediaLinks } from './SocialMediaLinks'

const FIREFOX_IOS_BOTTOM_EXTENSION_PX = 72
const COLLAPSED_HEIGHT_PX = 80
const EXPANDED_HEIGHT_PX = 208

const isFirefoxIOS = () =>
  typeof navigator !== 'undefined' && /FxiOS/i.test(navigator.userAgent)

export const HeaderWithFooter = () => {
  const t = useTranslations('contact')
  const pathname = usePathname()

  const [isAtBottom, setIsAtBottom] = useState(false)
  const [bottomOffset, setBottomOffset] = useState(0)
  const [firefoxExtension, setFirefoxExtension] = useState(0)

  useEffect(() => {
    const updateBottomOffset = () => {
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches

      if (isDesktop) {
        setBottomOffset(0)
        setFirefoxExtension(0)
        return
      }

      const shouldUseFirefoxFix = isFirefoxIOS()
      setFirefoxExtension(
        shouldUseFirefoxFix ? FIREFOX_IOS_BOTTOM_EXTENSION_PX : 0
      )

      const visualViewport = window.visualViewport

      if (!visualViewport) {
        setBottomOffset(0)
        return
      }

      const offset =
        window.innerHeight - visualViewport.height - visualViewport.offsetTop

      setBottomOffset(Math.max(0, offset))
    }

    updateBottomOffset()

    window.addEventListener('scroll', updateBottomOffset, { passive: true })
    window.addEventListener('resize', updateBottomOffset)
    window.visualViewport?.addEventListener('resize', updateBottomOffset)
    window.visualViewport?.addEventListener('scroll', updateBottomOffset)

    return () => {
      window.removeEventListener('scroll', updateBottomOffset)
      window.removeEventListener('resize', updateBottomOffset)
      window.visualViewport?.removeEventListener('resize', updateBottomOffset)
      window.visualViewport?.removeEventListener('scroll', updateBottomOffset)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollingElement =
        document.scrollingElement ?? document.documentElement

      const scrollTop = scrollingElement.scrollTop
      const pageHeight = scrollingElement.scrollHeight
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight

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

  const contentHeight = isAtBottom ? EXPANDED_HEIGHT_PX : COLLAPSED_HEIGHT_PX

  const headerStyle: CSSProperties = {
    bottom: bottomOffset - firefoxExtension,
    height: contentHeight + firefoxExtension
  }

  return (
    <header
      style={headerStyle}
      className=" bg-red-500 fixed right-0 left-0 z-50 w-full transition-[height] duration-300 lg:top-0 lg:h-20"
    >
      <div className="p-gapSpace flex items-center bg-beige md:p-4">
        <Logo />
        <DropdownMenu />
      </div>

      {isAtBottom && (
        <div className="mx-auto flex flex-col items-center justify-center bg-beige pb-[calc(0.75rem+env(safe-area-inset-bottom))] lg:pr-16">
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