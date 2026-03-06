import type { LucideIcon } from 'lucide-react'
import { ClipboardCheck, Info, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Card } from '@/app/components/surfaces/Card'
import { H2 } from '@/app/components/typography/H2'
import { H3 } from '@/app/components/typography/H3'
import { P } from '@/app/components/typography/P'
import { BgColors } from '@/app/types'

type Step = {
  title: string
  description: string
  icon: LucideIcon
}

export function StepsSection() {
  const t = useTranslations('tack.steps')

  const steps: Step[] = [
    {
      title: t('step1.title'),
      description: t('step1.description'),
      icon: Mail
    },
    {
      title: t('step2.title'),
      description: t('step2.description'),
      icon: Info
    },
    {
      title: t('step3.title'),
      description: t('step3.description'),
      icon: ClipboardCheck
    }
  ]

  return (
    <Card
      bgColor={BgColors.Beige}
      className="before:bg-[-100%_20%]"
      content={
          <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <H2 id="what-happens-next-title">{t('title')}</H2>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-0">
              {steps.map((step, idx) => (
                <article
                  key={step.title}
                  className={`px-4 text-center md:px-10 ${idx > 0 ? 'md:border-gold md:border-l' : ''}`}
                >
                  <div className="mb-6 flex justify-center">
                    <div className="text-gold inline-flex size-16 items-center justify-center">
                      <step.icon
                        aria-hidden="true"
                        className="size-11"
                        strokeWidth={1.4}
                      />
                    </div>
                  </div>
                  <H3 className="font-medium">{step.title}</H3>
                  <P>{step.description}</P>
                </article>
              ))}
            </div>
          </div>
      }
    />
  )
}
