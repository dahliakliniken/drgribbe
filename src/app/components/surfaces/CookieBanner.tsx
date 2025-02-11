'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Cookies from 'js-cookie'
import classNames from 'classnames'

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslations()

  useEffect(() => {
    const consent = Cookies.get('cookieConsent')

    if (consent !== 'true') {
      setShowBanner(true)
      const timeoutId = setTimeout(() => setIsVisible(true), 300)

      return () => clearTimeout(timeoutId)
    }
  }, [])

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'true', {
      expires: 365,
      path: '/',
      secure: true,
      sameSite: 'Strict'
    })
    setIsVisible(false)
  }

  const handleDeny = () => {
    setIsVisible(false)
    setTimeout(() => setShowBanner(false), 300)
  }

  if (!showBanner) return null

  return (
    <div
      className={classNames(
        'fixed left-4 right-4 top-4 z-50 flex max-w-md flex-col items-center gap-4 rounded-2xl bg-green p-4 text-white shadow-xl transition-all duration-300 ease-in-out md:left-auto md:top-auto',
        {
          'translate-y-0 opacity-100 md:bottom-4': isVisible,
          '-translate-y-full opacity-0 md:bottom-4 md:translate-y-full':
            !isVisible
        }
      )}
    >
      <div className="text-sm">{t('cookieBanner.text')}</div>
      <div className="flex gap-2">
        <button
          onClick={handleAccept}
          className="rounded-lg bg-white px-4 py-2 text-black transition hover:bg-coral hover:text-white"
        >
          {t('cookieBanner.accept')}
        </button>
        <button
          onClick={handleDeny}
          className="rounded-lg bg-gray-500 px-4 py-2 text-sm text-white transition hover:bg-gray-600"
        >
          {t('cookieBanner.reject')}
        </button>
      </div>
    </div>
  )
}
