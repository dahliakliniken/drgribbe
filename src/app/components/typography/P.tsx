type PProps = {
  children: React.ReactNode
}

const P = ({ children }: PProps) => {
  return (
    <p className="font-josefin-sans text-[20px] font-light leading-tight tracking-[0.06em] text-white">
      {children}
    </p>
  )
}

export default P
