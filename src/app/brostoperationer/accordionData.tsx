import { useTranslations } from 'next-intl'

import { P } from '@/components/typography/P'

export const useAccordionItems = () => {
  const t = useTranslations('brostoperationer.page.process.surgery.accordion')
  const tComplications = useTranslations('brostoperationer.page.complications.accordion')

  const complications = [
    {
      id: crypto.randomUUID(),
      title: tComplications('capsule.title'),
      content: (
        <>
          <P font-bold>{tComplications('capsule.content.bold1')}</P>
          <P>{tComplications('capsule.content.text1')}</P>
          <P font-bold>{tComplications('capsule.content.bold2')}</P>
          <P>{tComplications('capsule.content.text2')}</P>
          <P font-bold>{tComplications('capsule.content.bold3')}</P>
          <P>{tComplications('capsule.content.text3')}</P>
          <P font-bold>{tComplications('capsule.content.bold4')}</P>
          <P>{tComplications('capsule.content.text4')}</P>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: tComplications('sensory.title'),
      content: (
        <>
          <P font-bold>{tComplications('sensory.content.bold1')}</P>
          <P>{tComplications('sensory.content.text1')}</P>
          <P font-bold>{tComplications('sensory.content.bold2')}</P>
          <P>{tComplications('sensory.content.text2')}</P>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: tComplications('alcl.title'),
      content: (
        <>
          <P font-bold>{tComplications('alcl.content.bold1')}</P>
          <P>{tComplications('alcl.content.text1')}</P>
          <P font-bold>{tComplications('alcl.content.bold2')}</P>
          <P>{tComplications('alcl.content.text2')}</P>
          <P font-bold>{tComplications('alcl.content.bold3')}</P>
          <P>{tComplications('alcl.content.text3')}</P>
        </>
      )
    }
  ]

  const surgeryItems = [
    {
      id: crypto.randomUUID(),
      title: t('preparation.title'),
      content: (
        <>
          <P>{t('preparation.paragraph1')}</P>
          <P>{t('preparation.paragraph2')}</P>
          <P>{t('preparation.paragraph3')}</P>
          <P>{t('preparation.paragraph4')}</P>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('anesthesia.title'),
      content: (
        <>
          <P>{t('anesthesia.paragraph1')}</P>
          <P>{t('anesthesia.paragraph2')}</P>
          <P>{t('anesthesia.paragraph3')}</P>
          <P>{t('anesthesia.paragraph4')}</P>
          <P>{t('anesthesia.paragraph5')}</P>
          <P>{t('anesthesia.paragraph6')}</P>
          <P>{t('anesthesia.paragraph7')}</P>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('duringOperation.title'),
      content: (
        <>
          <P>{t('duringOperation.paragraph1')}</P>
          <P>{t('duringOperation.paragraph2')}</P>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('care.title'),
      content: (
        <>
          <P>{t('care.paragraph1')}</P>
          <P>{t('care.paragraph2')}</P>
        </>
      )
    }
  ]

  return [surgeryItems, complications]
}
