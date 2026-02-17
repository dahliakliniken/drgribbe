import { useTranslations } from 'next-intl'

import { AnchorLink } from '@/components/typography/AnchorLink'
import { P } from '@/components/typography/P'

export const useAccordionData = () => {
  const tAccordion = useTranslations('brostforstoring.page.technique.accordion')
  const ft = useTranslations('fragor-och-svar.page.faqAccordion')

  const faqAccordion = [
    {
      id: crypto.randomUUID(),
      title: ft('question4.question'),
      content: <P small>{ft('question4.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: ft('question11.question'),
      content: <P small>{ft('question11.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: ft('question12.question'),
      content: <P small>{ft('question12.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: ft('question1.question'),
      content: <P small>{ft('question1.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: ft('question24.question'),
      content: <P small>{ft('question24.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: ft('question21.question'),
      content: <P small>{ft('question21.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: ft('question30.question'),
      content: <P small>{ft('question30.answer')}</P>
    }
  ]

  const teknikAccordion = [
    {
      id: 'brostforstoringteknik',
      title: tAccordion('incision.title'),
      content: (
        <>
          <P small>{tAccordion('incision.paragraph1')}</P>
        </>
      )
    },
    {
      id: 'implantficka',
      title: tAccordion('implantPocket.title'),
      content: (
        <>
          <P small>
            {tAccordion.rich('implantPocket.paragraph1', {
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
      title: tAccordion('diathermy.title'),
      content: (
        <>
          <P small>{tAccordion('diathermy.paragraph1')}</P>
        </>
      )
    },
    {
      id: 'fickabakommuskel',
      title: tAccordion('submuscularPocket.title'),
      content: (
        <>
          <P small>{tAccordion('submuscularPocket.paragraph1')}</P>
        </>
      )
    },
    {
      id: 'fickaframformuskel',
      title: tAccordion('subglandularPocket.title'),
      content: (
        <>
          <P small>{tAccordion('subglandularPocket.paragraph1')}</P>
          <P small>{tAccordion('subglandularPocket.paragraph2')}</P>
          <P small>{tAccordion('subglandularPocket.paragraph3')}</P>
        </>
      )
    },
    {
      id: 'forainimplantat',
      title: tAccordion('implantInsertion.title'),
      content: (
        <>
          <P small>{tAccordion('implantInsertion.paragraph1')}</P>
        </>
      )
    },
    {
      id: 'syihop',
      title: tAccordion('closure.title'),
      content: (
        <>
          <P small>{tAccordion('closure.paragraph1')}</P>
        </>
      )
    },
    {
      id: 'forband',
      title: tAccordion('dressing.title'),
      content: (
        <>
          <P small>{tAccordion('dressing.paragraph1')}</P>
        </>
      )
    }
  ]

  return [teknikAccordion, faqAccordion]
}
