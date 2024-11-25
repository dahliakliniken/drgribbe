type H2Props = {
  children: React.ReactNode
  id?: string
  white?: boolean
  upperCase?: boolean
  className?: string
}

export const H2 = ({ children, id, white, upperCase, className }: H2Props) => {
  return (
    <h2
      id={id}
      className={`text-3xl font-light ${upperCase && 'uppercase'} ${white ? 'text-white' : 'text-black'} mb-4 ${className}`}
    >
      {children}
    </h2>
  )
}
