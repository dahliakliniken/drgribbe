type H2Props = {
  children: React.ReactNode
  color?: string // Färg som prop
  upperCase?: boolean
}

const H2 = ({ children, color = 'text-black', upperCase }: H2Props) => {
  return (
    <h2
      className={`font-josefin-sans ${color} mt-4 text-2xl font-light leading-tight ${upperCase && 'uppercase'}`}
    >
      {children}
    </h2>
  )
}

export default H2
