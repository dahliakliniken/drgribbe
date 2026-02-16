import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { H2 } from '@/app/components/typography/H2'
import { P } from '@/app/components/typography/P'
import { StepsSection } from '@/app/tack/StepsSection'
import { SpaceContainer } from '@/components/layout/SpaceContainer'
import { H1 } from '@/components/typography/H1'

export const Tack = () => {
  const t = useTranslations('tack')

  return (
    <>
      <SpaceContainer spaceTop>
        <div className="flex flex-col items-center">
          <div className="bg-green/10 mb-8 flex h-20 w-20 items-center justify-center rounded-full">
            <div className="bg-green flex h-14 w-14 items-center justify-center rounded-full">
              <Check className="h-7 w-7 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <H1>{t('title')}</H1>
          <P>{t('intro')}</P>
          <section className="my-6 flex justify-center px-6 pb-16">
            <div className="border-gold bg-beige/40 w-full max-w-lg rounded-2xl border p-8 text-center shadow-lg">
              <H2>{t('confirmation.title')}</H2>

              <P>{t('confirmation.text1')}</P>
              <P>{t('confirmation.text2')}</P>
            </div>
          </section>
        </div>
      </SpaceContainer>
      <StepsSection />
    </>
  )
}
