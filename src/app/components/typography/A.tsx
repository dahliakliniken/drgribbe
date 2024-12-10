import Link from 'next/link'
import { forwardRef } from 'react'

type AProps = {
  children: React.ReactNode
  href: string
  className?: string
  color?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export const A = forwardRef<HTMLAnchorElement, AProps>(
  ({ children, href, color = 'text-white', className, onClick }, ref) => {
    return (
      <Link
        href={href}
        className={`underline-offset-3 font-josefin-sans text-base font-light leading-tight tracking-[0.06em] underline ${color} ${className}`}
        ref={ref}
        onClick={onClick}
      >
        {children}
      </Link>
    )
  }
)

A.displayName = 'A'
