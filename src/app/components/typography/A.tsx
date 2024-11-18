import Link from 'next/link'
import { forwardRef } from 'react'

type AProps = {
  children: React.ReactNode
  href: string
  className?: string
  color?: string
}

export const A = forwardRef<HTMLAnchorElement, AProps>(
  ({ children, href, color = 'text-white', className }, ref) => {
    return (
      <Link
        href={href}
        className={`underline-offset-3 font-josefin-sans text-base font-light leading-tight tracking-[0.06em] underline ${color} ${className}`}
        ref={ref}
      >
        {children}
      </Link>
    )
  }
)

A.displayName = 'A'
