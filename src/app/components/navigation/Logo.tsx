import Image from 'next/image'
import DahliaLogo from '../../../../public/images/logo.svg'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export const Logo = () => {
  const t = useTranslations()
  return (
    <div className="bg-beige flex w-full justify-center">
      <Link href="/">
        <Image src={DahliaLogo} alt={t('altText.dahliaLogo')} />
      </Link>
    </div>
  )
}
