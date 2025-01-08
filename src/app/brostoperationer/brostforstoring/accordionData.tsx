import { P } from '@/app/components/typography/P'
import { H3 } from '@/app/components/typography/H3'
import { useTranslations } from 'next-intl'
import { AnchorLink } from '@/app/components/typography/AnchorLink'

export const getTeknikAccordion = (t: (key: string) => string) => [
  {
    id: 'brostforstoringteknik',
    title: t('technique.heading2'),
    content: (
      <>
      <H3>{t('technique.heading2')}</H3>
      <P >{t('technique.text2')}</P>
      </>
    )
  },
  {
    id: 'implantficka',
    title: t('technique.heading3'),
    content: (
      <>
      <H3>{t('technique.heading3')}</H3>
       <P >
        {useTranslations('brostforstoring').rich('technique.text3', {
          link: (chunks) => (
            <AnchorLink href="#placering">
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
      <H3>{t('technique.heading4')}</H3>
        <P>{t('technique.text4')}</P>
        
      </>
    )
  },
  {
    id: 'fickabakommuskel',
    title: t('technique.heading5'),
    content: (
      <>
      <H3>{t('technique.heading5')}</H3>
      <P>{t('technique.text5')}</P>        
      </>
    )
  },
  {
    id: 'fickaframformuskel',
    title: t('technique.heading6'),
    content: (
      <>
      <H3>{t('technique.heading6')}</H3>
      <P>{t('technique.text6_1')}</P>
      <P>{t('technique.text6_2')}</P>
      <P>{t('technique.text6_3')}</P>
      
      </>
    )
  },
  {
    id: 'forainimplantat',
    title: t('technique.heading7'),
    content: (
      <>
      <H3>{t('technique.heading7')}</H3>
      <P>{t('technique.text7')}</P>
      </>
    )
  },
  {
    id: 'syihop',
    title: t('technique.heading8'),
    content: (
      <>
      <H3>{t('technique.heading8')}</H3>
      <P>{t('technique.text8')}</P>
      </>
    )
  },
  {
    id: 'forband',
    title: t('technique.heading9'),
    content: (
      <>
      <H3>{t('technique.heading9')}</H3>
      <P>{t('technique.text9')}</P>
      </>
    )
  }

]

export const getOtherAreasAccordion = (t: (key: string) => string) => [
  {
    id: 'eyeBrow',
    title: t('hudochinjektioner.otherAreas.accordion.eyeBrow.heading'),
    content: <P>{t('hudochinjektioner.otherAreas.accordion.eyeBrow.text1')}</P>
  },
  {
    id: 'mouthCorner',
    title: t('hudochinjektioner.otherAreas.accordion.mouthCorner.heading'),
    content: (
      <P>{t('hudochinjektioner.otherAreas.accordion.mouthCorner.text1')}</P>
    )
  },
  {
    id: 'nose',
    title: t('hudochinjektioner.otherAreas.accordion.nose.heading'),
    content: <P>{t('hudochinjektioner.otherAreas.accordion.nose.text1')}</P>
  },
  {
    id: 'lipFlip',
    title: t('hudochinjektioner.otherAreas.accordion.lipFlip.heading'),
    content: <P>{t('hudochinjektioner.otherAreas.accordion.lipFlip.text1')}</P>
  },
  {
    id: 'gummySmile',
    title: t('hudochinjektioner.otherAreas.accordion.gummySmile.heading'),
    content: (
      <P>{t('hudochinjektioner.otherAreas.accordion.gummySmile.text1')}</P>
    )
  },
  {
    id: 'chin',
    title: t('hudochinjektioner.otherAreas.accordion.chin.heading'),
    content: <P>{t('hudochinjektioner.otherAreas.accordion.chin.text1')}</P>
  },
  {
    id: 'neck',
    title: t('hudochinjektioner.otherAreas.accordion.neck.heading'),
    content: <P>{t('hudochinjektioner.otherAreas.accordion.neck.text1')}</P>
  },
  {
    id: 'bruxism',
    title: t('hudochinjektioner.otherAreas.accordion.bruxism.heading'),
    content: <P>{t('hudochinjektioner.otherAreas.accordion.bruxism.text1')}</P>
  },
  {
    id: 'headache',
    title: t('hudochinjektioner.otherAreas.accordion.headache.heading'),
    content: <P>{t('hudochinjektioner.otherAreas.accordion.headache.text1')}</P>
  },
  {
    id: 'sweating',
    title: t('hudochinjektioner.otherAreas.accordion.sweating.heading'),
    content: <P>{t('hudochinjektioner.otherAreas.accordion.sweating.text1')}</P>
  }
]
