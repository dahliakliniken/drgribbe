'use client'

import { useTranslations } from 'next-intl'

import { Button } from '../inputs/Button'
import { A } from '../typography/A'
import { SocialMediaLinks } from './SocialMediaLinks'

export const Footer = () => {
  const t = useTranslations('contact')

  return (
    <footer className="mx-auto flex flex-col items-center justify-center bg-beige py-4 pb-24 lg:pr-16 lg:pb-4">
      <div className="flex flex-col gap-2 text-center text-base font-light">
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
          className="justify-center text-base underline"
          inverted
          textButton
          onClick={() => window.CookieScript?.instance?.show()}
        >
          {t('handleCookies')}
        </Button>
        <A href="/personuppgiftspolicy" small>
          {t('privacyPolicy')}
        </A>
        <SocialMediaLinks className="justify-center pt-2" />
      </div>
    </footer>
  )
}
