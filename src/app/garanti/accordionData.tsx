import { useTranslations } from 'next-intl'

import { P } from '@/components/typography/P'

export const useAccordionItems = () => {
  const t = useTranslations('garanti.page.complications.accordion')
  const complications = [
    {
      id: crypto.randomUUID(),
      title: t('capsule.title'),
      content: (
        <>
          <P font-bold>{t('capsule.content.bold1')}</P>
          <P>{t('capsule.content.text1')}</P>
          <P font-bold>{t('capsule.content.bold2')}</P>
          <P>{t('capsule.content.text2')}</P>
          <P font-bold>{t('capsule.content.bold3')}</P>
          <P>{t('capsule.content.text3')}</P>
          <P font-bold>{t('capsule.content.bold4')}</P>
          <P>{t('capsule.content.text4')}</P>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('sensory.title'),
      content: (
        <>
          <P font-bold>{t('sensory.content.bold1')}</P>
          <P>{t('sensory.content.text1')}</P>
          <P font-bold>{t('sensory.content.bold2')}</P>
          <P>{t('sensory.content.text2')}</P>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('alcl.title'),
      content: (
        <>
          <P font-bold>{t('alcl.content.bold1')}</P>
          <P>{t('alcl.content.text1')}</P>
          <P font-bold>{t('alcl.content.bold2')}</P>
          <P>{t('alcl.content.text2')}</P>
          <P font-bold>{t('alcl.content.bold3')}</P>
          <P>{t('alcl.content.text3')}</P>
        </>
      )
    }
  ]

  return [complications]
}
