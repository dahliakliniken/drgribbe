'use client'

import { useDelayedAnimation } from '@/hooks/useDelayedAnimation'
import { ChevronDown } from 'lucide-react'
import HeroImage from '../../../../public/images/hero-image.jpg'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { A } from '../typography/A'
import classNames from 'classnames'

export const Hero = () => {
  const t = useTranslations()
  const showAnimation = useDelayedAnimation(3000) // 3 seconds delay

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div
      className={classNames('transition-all duration-500', {
        'animate-page-bounce': showAnimation
      })}
    >
      <section className="relative flex h-[calc(100dvh-80px)] flex-col items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={HeroImage}
            className="h-full w-full object-cover object-center"
            priority
            placeholder="blur"
            alt={t('altText.heroImage')}
          />
        </div>

        <div className="herogradient absolute inset-0"></div>
        <div
          className={classNames(
            'absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer transition-opacity duration-500',
            {
              'opacity-100': showAnimation,
              'opacity-0': !showAnimation
            }
          )}
          onClick={scrollDown}
        >
          <ChevronDown size={48} className="animate-bounce text-white" />
        </div>
        <div className="absolute bottom-24">
          <A href="/boka" buttonStyle>
            {t('common.bookConsultation')}
          </A>
        </div>
      </section>
    </div>
  )
}
