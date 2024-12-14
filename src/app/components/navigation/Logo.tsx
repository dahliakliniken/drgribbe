import Image from 'next/image'
import DahliaLogo from '../../../../public/images/logo.svg'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export const Logo = () => {
  const t = useTranslations()
  return (
    <div className="flex w-full justify-center bg-[#EAE6E3]">
      <Link href="/">
        <Image
          src={DahliaLogo}
          alt={t('altText.dahliaLogo')}
          className="h-25"
        />
      </Link>
    </div>
  )
}
