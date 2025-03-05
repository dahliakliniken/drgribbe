import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export const Logo = () => {
  const t = useTranslations()
  return (
    <div className="bg-beige flex w-full justify-center">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt={t('altText.dahliaLogo')}
          width={214}
          height={39}
          className="w-[214px] md:w-[260px]"
        />
      </Link>
    </div>
  )
}
