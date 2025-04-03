import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

export const useLinksData = () => {
  const t = useTranslations()

  const mainLinks = useMemo(
    () => [
      {
        text: t('dropdown.clinic'),
        href: '/#om-kliniken',
        id: crypto.randomUUID()
      },
      {
        text: t('dropdown.breastSurgeries'),
        href: '/brostoperationer',
        id: crypto.randomUUID(),
        subLinks: [
          {
            text: t('dropdown.overview'),
            href: '/brostoperationer',
            id: crypto.randomUUID()
          },
          {
            text: t('dropdown.breastAugmentation'),
            href: '/brostoperationer/brostforstoring',
            id: crypto.randomUUID()
          },
          {
            text: t('dropdown.breastLift'),
            href: '/brostoperationer/brostlyft',
            id: crypto.randomUUID()
          },                    
          {
            text: t('dropdown.breastReduction'),
            href: '/brostoperationer/brostforminskning',
            id: crypto.randomUUID()
          },
          {
            text: t('dropdown.beforeAfter'),
            href: '/brostoperationer/fore-och-efter',
            id: crypto.randomUUID()
          }
        ]
      },
      {
        text: t('dropdown.implants'),
        href: '/brostoperationer/implantaten',
        id: crypto.randomUUID()
      },
      {
        text: t('dropdown.skinInjections'),
        href: '/hud-och-injektioner',
        id: crypto.randomUUID()
      },
      {
        text: t('dropdown.ourStaff'),
        href: '/var-personal',
        id: crypto.randomUUID()
      },
      {
        text: t('dropdown.price'),
        href: '/priser',
        id: crypto.randomUUID()
      },
      {
        text: t('dropdown.guarantee'),
        href: '/garanti',
        id: crypto.randomUUID()
      },
      {
        text: t('dropdown.faq'),
        href: '/fragor-och-svar',
        id: crypto.randomUUID()
      },
      {
        text: t('dropdown.findUs'),
        href: '/kontakt-och-besok',
        id: crypto.randomUUID()
      }
    ],
    [t]
  )

  return [mainLinks]
}
