import { useTranslations } from 'next-intl'

import { AnchorLink } from '@/app/components/typography/AnchorLink'
import { P } from '@/app/components/typography/P'

export const getTeknikAccordion = (t: (key: string) => string) => [
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

export const getOtherAreasAccordion = (t: (key: string) => string) => [
  {
    id: 'eyeBrow',
    title: t('hudochinjektioner.otherAreas.accordion.eyeBrow.heading'),
    content: (
      <P small>{t('hudochinjektioner.otherAreas.accordion.eyeBrow.text1')}</P>
    )
  },
  {
    id: 'mouthCorner',
    title: t('hudochinjektioner.otherAreas.accordion.mouthCorner.heading'),
    content: (
      <P small>
        {t('hudochinjektioner.otherAreas.accordion.mouthCorner.text1')}
      </P>
    )
  },
  {
    id: 'nose',
    title: t('hudochinjektioner.otherAreas.accordion.nose.heading'),
    content: (
      <P small>{t('hudochinjektioner.otherAreas.accordion.nose.text1')}</P>
    )
  },
  {
    id: 'lipFlip',
    title: t('hudochinjektioner.otherAreas.accordion.lipFlip.heading'),
    content: (
      <P small>{t('hudochinjektioner.otherAreas.accordion.lipFlip.text1')}</P>
    )
  },
  {
    id: 'gummySmile',
    title: t('hudochinjektioner.otherAreas.accordion.gummySmile.heading'),
    content: (
      <P small>
        {t('hudochinjektioner.otherAreas.accordion.gummySmile.text1')}
      </P>
    )
  },
  {
    id: 'chin',
    title: t('hudochinjektioner.otherAreas.accordion.chin.heading'),
    content: (
      <P small>{t('hudochinjektioner.otherAreas.accordion.chin.text1')}</P>
    )
  },
  {
    id: 'neck',
    title: t('hudochinjektioner.otherAreas.accordion.neck.heading'),
    content: (
      <P small>{t('hudochinjektioner.otherAreas.accordion.neck.text1')}</P>
    )
  },
  {
    id: 'bruxism',
    title: t('hudochinjektioner.otherAreas.accordion.bruxism.heading'),
    content: (
      <P small>{t('hudochinjektioner.otherAreas.accordion.bruxism.text1')}</P>
    )
  },
  {
    id: 'headache',
    title: t('hudochinjektioner.otherAreas.accordion.headache.heading'),
    content: (
      <P small>{t('hudochinjektioner.otherAreas.accordion.headache.text1')}</P>
    )
  },
  {
    id: 'sweating',
    title: t('hudochinjektioner.otherAreas.accordion.sweating.heading'),
    content: (
      <P small>{t('hudochinjektioner.otherAreas.accordion.sweating.text1')}</P>
    )
  }
]
