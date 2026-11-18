'use client'

import classNames from 'classnames'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { useDelayedAnimation } from '@/hooks/useDelayedAnimation'
import HeroImage from '@/public/images/hero-image-1920.jpg'

import { A } from '../typography/A'

export const Hero = () => {
  const tPage = useTranslations('home-page.page')
  const tCommon = useTranslations('common')
  const showAnimation = useDelayedAnimation(3000) // 3 seconds delay

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth'
    })
  }

  return (
    <div
      className={classNames('transition-all duration-500', {
        'motion-safe:animate-page-bounce': showAnimation
      })}
    >
      <section className="relative flex h-[calc(100dvh-80px)] flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[#c8b8a8]">
          <Image
            src={HeroImage}
            alt={tPage('altText.heroImage')}
            className="absolute inset-0 h-full w-full object-cover object-center"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
        </div>

        <div className="herogradient absolute inset-0"></div>
        <button
          type="button"
          className={classNames(
            'absolute bottom-4 left-1/2 -translate-x-1/2 transition-opacity duration-500 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
            {
              'opacity-100': showAnimation,
              'opacity-0': !showAnimation
            }
          )}
          onClick={scrollDown}
        >
          <span className="sr-only">{tPage('scrollDown')}</span>
          <ChevronDown
            aria-hidden="true"
            size={48}
            className="text-white motion-safe:animate-bounce"
          />
        </button>
        <div className="absolute bottom-24">
          <A href="/boka" buttonStyle>
            {tCommon('bookConsultation')}
          </A>
        </div>
      </section>
    </div>
  )
}
