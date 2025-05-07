import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { FacebookIcon } from '../icons/FacebookIcon'
import { InstagramIcon } from '../icons/InstagramIcon'

export const SocialMediaLinks = ({ className }: { className?: string }) => {
  const t = useTranslations()
  return (
    <div className={`flex gap-2 ${className}`}>
      <Link
        href="https://www.instagram.com/dahliakliniken"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gold transition-colors duration-300"
        aria-label={t('contact.followOnInstagram')}
      >
        <InstagramIcon />
      </Link>
      <Link
        href="https://www.facebook.com/profile.php?id=61561494238444"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gold transition-colors duration-300"
        aria-label={t('contact.followOnFacebook')}
      >
        <FacebookIcon />
      </Link>
    </div>
  )
}
