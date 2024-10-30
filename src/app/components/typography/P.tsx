type PProps = {
  children: React.ReactNode
  color?: string // Färg som prop
  small?: boolean
}

const P = ({ children, color = 'text-black', small }: PProps) => {
  return (
    <p
      className={`font-josefin-sans ${small ? 'text-base' : 'text-xl'} font-light leading-tight tracking-[0.06em] ${color}`}
    >
      {children}
    </p>
  )
}

export default P
