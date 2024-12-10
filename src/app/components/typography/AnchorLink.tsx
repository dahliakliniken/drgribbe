'use client'

import { useRouter } from 'next/navigation'
import { A } from './A'

type SmoothScrollLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export const AnchorLink = ({
  href,
  children,
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
      className={`${className} text-xl`}
      color="text-black"
    >
      {children}
    </A>
  )
}
