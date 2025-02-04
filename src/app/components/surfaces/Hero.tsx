import Image from 'next/image'
import { A } from '../typography/A'
import { useTranslations } from 'next-intl'
import HeroImage from '../../../../public/images/hero-image.jpg'

export const Hero = () => {
  const t = useTranslations()

  return (
    <section className="relative flex h-[calc(100dvh-80px)] flex-col items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src={HeroImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          placeholder="blur"
        />
      </div>
      <div className="herogradient absolute inset-0"></div>
      <div className="absolute bottom-24">
        <A href="/boka" buttonStyle>
          {t('common.bookConsultation')}
        </A>
      </div>
    </section>
  )
}
