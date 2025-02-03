import { useTranslations } from 'next-intl'
import { P } from '@/app/components/typography/P'

export const useAccordionItems = () => {
  const t = useTranslations()
  const surgeryItems = [
    {
      id: crypto.randomUUID(),
      title: t('brostoperationer.surgery.preparation'),
      content: <P>{t('brostoperationer.surgery.text2')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('brostoperationer.surgery.anesthesia'),
      content: (
        <>
          <P>{t('brostoperationer.surgery.text3')}</P>
          <P>{t('brostoperationer.surgery.text4')}</P>
          <P>{t('brostoperationer.surgery.text5')}</P>
          <P>{t('brostoperationer.surgery.text6')}</P>
          <P>{t('brostoperationer.surgery.text7')}</P>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('brostoperationer.surgery.duringOperation'),
      content: (
        <>
          <P>{t('brostoperationer.surgery.text8')}</P>
          <P>{t('brostoperationer.surgery.text9')}</P>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('brostoperationer.surgery.care'),
      content: (
        <>
          <P>{t('brostoperationer.surgery.text10')}</P>
          <P>{t('brostoperationer.surgery.text11')}</P>
        </>
      )
    }
  ]

  return [surgeryItems]
}
