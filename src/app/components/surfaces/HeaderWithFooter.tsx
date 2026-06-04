'use client'

import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { CSSProperties, useEffect, useState } from 'react'

import {
  BOTTOM_SCROLL_THRESHOLD_PX,
  DESKTOP_QUERY,
  getMobileBottomInset,
  HEADER_COLLAPSED_HEIGHT_PX,
  HEADER_EXPANDED_HEIGHT_PX} from '@/utils/browser'

import { Button } from '../inputs/Button'
import { DropdownMenu } from '../navigation/DropdownMenu'
import { Logo } from '../navigation/Logo'
import { SocialMediaLinks } from './SocialMediaLinks'

export const HeaderWithFooter = () => {
  const t = useTranslations('contact')
  const pathname = usePathname()

  const [isAtBottom, setIsAtBottom] = useState(false)
  const [bottomInset, setBottomInset] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const updateLayout = () => {
      const desktop = window.matchMedia(DESKTOP_QUERY).matches
      setIsDesktop(desktop)
      setBottomInset(getMobileBottomInset())

      const scrollingElement =
        document.scrollingElement ?? document.documentElement

      const scrollTop = scrollingElement.scrollTop
      const pageHeight = scrollingElement.scrollHeight
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight

      const isScrollable =
        pageHeight > viewportHeight + BOTTOM_SCROLL_THRESHOLD_PX
      const hasReachedBottom =
        scrollTop + viewportHeight >= pageHeight - BOTTOM_SCROLL_THRESHOLD_PX

      setIsAtBottom(isScrollable && hasReachedBottom)
    }

    updateLayout()

    const desktopMediaQuery = window.matchMedia(DESKTOP_QUERY)
    desktopMediaQuery.addEventListener('change', updateLayout)

    window.addEventListener('scroll', updateLayout, { passive: true })
    window.addEventListener('resize', updateLayout)
    window.visualViewport?.addEventListener('resize', updateLayout)
    window.visualViewport?.addEventListener('scroll', updateLayout)

    return () => {
      desktopMediaQuery.removeEventListener('change', updateLayout)
      window.removeEventListener('scroll', updateLayout)
      window.removeEventListener('resize', updateLayout)
      window.visualViewport?.removeEventListener('resize', updateLayout)
      window.visualViewport?.removeEventListener('scroll', updateLayout)
    }
  }, [pathname])

  const contentHeight = isAtBottom
    ? HEADER_EXPANDED_HEIGHT_PX
    : HEADER_COLLAPSED_HEIGHT_PX

  const headerStyle: CSSProperties = isDesktop
    ? {
        top: 0,
        height: contentHeight
      }
    : {
        bottom: 0,
        height: contentHeight + bottomInset
      }

  return (
    <header
      style={headerStyle}
      className="fixed right-0 left-0 z-50 w-full bg-beige transition-[height] duration-300"
    >
      <div
        style={{
          paddingBottom: isDesktop ? 0 : bottomInset
        }}
        className="flex h-full flex-col bg-beige"
      >
        <div className="p-gapSpace flex items-center md:p-4">
          <Logo />
          <DropdownMenu />
        </div>

        {isAtBottom && (
          <div className="mx-auto flex flex-col items-center justify-center bg-beige pb-3 lg:pr-16">
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
      </div>
    </header>
  )
}
