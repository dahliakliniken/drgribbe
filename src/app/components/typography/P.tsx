type PProps = {
  children: React.ReactNode
  color?: string  // Färg som prop
}

const P = ({ children, color = 'text-black' }: PProps) => {
  return (
    <p className={`font-josefin-sans text-[20px] font-light leading-tight tracking-[0.06em] ${color}`}>
      {children}
    </p>
  )
}

export default P
