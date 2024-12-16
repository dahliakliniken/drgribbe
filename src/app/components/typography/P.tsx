type PProps = {
  children: React.ReactNode
  small?: boolean
  className?: string
  white?: boolean
}

export const P = ({ children, small, className, white }: PProps) => {
  return (
    <p
      className={`font-josefin-sans ${small ? 'text-base' : 'text-xl'} font-light leading-tight tracking-[0.06em] ${white ? 'text-white' : 'text-black'} ${className}`}
    >
      {children}
    </p>
  )
}
