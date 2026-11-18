import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  const t = useTranslations('common')
  return (
    <div className="flex w-full justify-center bg-beige">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt={t('altText.dahliaLogo')}
          width={214}
          height={39}
          className="w-53.5 md:w-65"
        />
      </Link>
    </div>
  )
}
