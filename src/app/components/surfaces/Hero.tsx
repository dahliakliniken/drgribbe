'use client'

import classNames from 'classnames'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { useDelayedAnimation } from '@/hooks/useDelayedAnimation'
import HeroImage from '@/public/images/hero-image.jpg'

import { A } from '../typography/A'
import { Video } from './Video'

const HERO_VIDEO_SRC = '/videos/hero.mp4'

export const Hero = () => {
  const tCommon = useTranslations('common')
  const showAnimation = useDelayedAnimation(3000) // 3 seconds delay

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth'
    })
  }

  return (
      <section className="relative flex h-[calc(100dvh-80px)] flex-col items-center justify-center">
        <div className="absolute inset-0">
          <Video
            src={HERO_VIDEO_SRC}
            className="h-full w-full"
            autoPlay
            muted
            loop
            preload="metadata"
            poster={HeroImage.src}
            fallbackImageSrc={HeroImage.src}
            fallbackImageAlt=""
          />
        </div>

        <div className="herogradient absolute inset-0"></div>
        <div
          className={classNames(
            'absolute bottom-4 left-1/2 z-10 -translate-x-1/2 cursor-pointer transition-opacity duration-500',
            {
              'opacity-100': showAnimation,
              'opacity-0': !showAnimation
            }
          )}
          onClick={scrollDown}
        >
          <ChevronDown size={48} className="animate-bounce text-white" />
        </div>
        <div className="absolute bottom-24 z-20">
          <A href="/boka" buttonStyle>
            {tCommon('bookConsultation')}
          </A>
        </div>
      </section>
  )
}
