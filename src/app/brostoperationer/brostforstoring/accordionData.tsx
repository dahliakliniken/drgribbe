import { useTranslations } from 'next-intl'

import { AnchorLink } from '@/app/components/typography/AnchorLink'
import { P } from '@/app/components/typography/P'

export const useAccordionData = () => {
  const t = useTranslations('brostforstoring')

  const teknikAccordion = [
    {
      id: 'brostforstoringteknik',
      title: t('technique.heading2'),
      content: (
        <>
          <P small>{t('technique.text2')}</P>
        </>
      )
    },
    {
      id: 'implantficka',
      title: t('technique.heading3'),
      content: (
        <>
          <P small>
            {useTranslations('brostforstoring').rich('technique.text3', {
              link: (chunks) => (
                <AnchorLink small href="#placering">
                  {chunks}
                </AnchorLink>
              )
            })}
          </P>
        </>
      )
    },
    {
      id: 'diatermi',
      title: t('technique.heading4'),
      content: (
        <>
          <P small>{t('technique.text4')}</P>
        </>
      )
    },
    {
      id: 'fickabakommuskel',
      title: t('technique.heading5'),
      content: (
        <>
          <P small>{t('technique.text5')}</P>
        </>
      )
    },
    {
      id: 'fickaframformuskel',
      title: t('technique.heading6'),
      content: (
        <>
          <P small>{t('technique.text6_1')}</P>
          <P small>{t('technique.text6_2')}</P>
          <P small>{t('technique.text6_3')}</P>
        </>
      )
    },
    {
      id: 'forainimplantat',
      title: t('technique.heading7'),
      content: (
        <>
          <P small>{t('technique.text7')}</P>
        </>
      )
    },
    {
      id: 'syihop',
      title: t('technique.heading8'),
      content: (
        <>
          <P small>{t('technique.text8')}</P>
        </>
      )
    },
    {
      id: 'forband',
      title: t('technique.heading9'),
      content: (
        <>
          <P small>{t('technique.text9')}</P>
        </>
      )
    }
  ]

  return [teknikAccordion]
}
