type H2Props = {
  children: React.ReactNode
  color?: string  // Färg som prop
}

const H2 = ({ children, color = 'text-black' }: H2Props) => {
  return (
    <h2 className={`font-josefin-sans ${color} text-2xl font-light leading-tight`}>
      {children}
    </h2>
  )
}

export default H2
