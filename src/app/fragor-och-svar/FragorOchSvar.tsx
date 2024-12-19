import { useTranslations } from 'next-intl'
import { Pillar } from '../components/layout/Pillar'
import { H1 } from '../components/typography/H1'
import { P } from '../components/typography/P'
import { SpaceContainer } from '../components/layout/SpaceContainer'
import { Accordion } from '../components/surfaces/Accordion'
import { A } from '../components/typography/A'

const FragorOchSvar = () => {
  const t = useTranslations('fragorOchSvar')

  const faqData = [
    {
      id: crypto.randomUUID(),
      title: t('accordion.question1.question'),
      content: t('accordion.question1.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question2.question'),
      content: t.rich('accordion.question2.answer', {
        link: (chunks) => (
          <A color="text-black" small href="/brostoperationer#forberedelser">
            {chunks}
          </A>
        )
      })
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question3.question'),
      content: t('accordion.question3.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question4.question'),
      content: t('accordion.question4.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question5.question'),
      content: t('accordion.question5.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question6.question'),
      content: t('accordion.question6.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question7.question'),
      content: t('accordion.question7.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question8.question'),
      content: t('accordion.question8.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question9.question'),
      content: t('accordion.question9.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question10.question'),
      content: t('accordion.question10.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question11.question'),
      content: t('accordion.question11.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question12.question'),
      content: t('accordion.question12.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question13.question'),
      content: t('accordion.question13.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question14.question'),
      content: t('accordion.question14.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question15.question'),
      content: t('accordion.question15.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question16.question'),
      content: t('accordion.question16.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question17.question'),
      content: t('accordion.question17.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question18.question'),
      content: t('accordion.question18.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question19.question'),
      content: t('accordion.question19.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question20.question'),
      content: t('accordion.question20.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question21.question'),
      content: t('accordion.question21.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question22.question'),
      content: t('accordion.question22.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question23.question'),
      content: t('accordion.question23.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question24.question'),
      content: t('accordion.question24.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question25.question'),
      content: t('accordion.question25.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question26.question'),
      content: t('accordion.question26.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question27.question'),
      content: t('accordion.question27.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question28.question'),
      content: t('accordion.question28.answer')
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question29.question'),
      content: t('accordion.question29.answer')
    }
  ]

  return (
    <main className="mb-36 flex flex-col">
      <Pillar>
        <SpaceContainer>
          <H1>{t('title')}</H1>
          <P>{t('introduction')}</P>
          <SpaceContainer noPadding spaceVertically>
            <Accordion items={faqData} />
          </SpaceContainer>
        </SpaceContainer>
      </Pillar>
    </main>
  )
}

export default FragorOchSvar
