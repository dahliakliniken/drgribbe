'use client'

import { useRouter } from 'next/navigation'
import { A } from './A'

type SmoothScrollLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  small?: boolean
}

export const AnchorLink = ({
  href,
  children,
  small,
  className
}: SmoothScrollLinkProps) => {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace(/.*#/, '')
    const elem = document.getElementById(targetId)
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
      router.push(href, { scroll: false })
    }
  }

  return (
    <A
      href={href}
      onClick={handleClick}
      className={`${className} ${small ? 'text-base' : 'text-lg'}`}
    >
      {children}
    </A>
  )
}
