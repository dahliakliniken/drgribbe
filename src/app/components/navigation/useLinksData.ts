import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

export const useLinksData = () => {
  const t = useTranslations('dropdown')

  const mainLinks = useMemo(
    () => [
      {
        text: t('clinic'),
        href: '/#om-kliniken',
        id: crypto.randomUUID()
      },
      {
        text: t('breastSurgeries'),
        href: '/brostoperationer',
        id: crypto.randomUUID(),
        subLinks: [
          {
            text: t('overview'),
            href: '/brostoperationer',
            id: crypto.randomUUID()
          },
          {
            text: t('breastAugmentation'),
            href: '/brostoperationer/brostforstoring',
            id: crypto.randomUUID()
          },
          {
            text: t('breastLift'),
            href: '/brostoperationer/brostlyft',
            id: crypto.randomUUID()
          },                    
          {
            text: t('breastReduction'),
            href: '/brostoperationer/brostforminskning',
            id: crypto.randomUUID()
          },
          {
            text: t('beforeAfter'),
            href: '/brostoperationer/fore-och-efter',
            id: crypto.randomUUID()
          }
        ]
      },
      {
        text: t('implants'),
        href: '/brostoperationer/implantaten',
        id: crypto.randomUUID()
      },
      {
        text: t('skinInjections'),
        href: '/hud-och-injektioner',
        id: crypto.randomUUID()
      },
      {
        text: t('ourStaff'),
        href: '/var-personal',
        id: crypto.randomUUID()
      },
      {
        text: t('price'),
        href: '/priser',
        id: crypto.randomUUID()
      },
      {
        text: t('guarantee'),
        href: '/garanti',
        id: crypto.randomUUID()
      },
      {
        text: t('faq'),
        href: '/fragor-och-svar',
        id: crypto.randomUUID()
      },
      {
        text: t('findUs'),
        href: '/kontakt-och-besok',
        id: crypto.randomUUID()
      }
    ],
    [t]
  )

  return [mainLinks]
}
