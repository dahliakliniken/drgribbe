type PProps = {
  children: React.ReactNode
  color?: string // Färg som prop
  small?: boolean
  className?: string
}

export const P = ({
  children,
  color = 'text-black',
  small,
  className
}: PProps) => {
  return (
    <p
      className={`font-josefin-sans ${small ? 'text-base' : 'text-xl'} font-light leading-tight tracking-[0.06em] ${color} ${className}`}
    >
      {children}
    </p>
  )
}
