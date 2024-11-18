type H1Props = {
  children: React.ReactNode
  white?: boolean
  upperCase?: boolean
}

export const H1 = ({ children, white, upperCase }: H1Props) => {
  return (
    <h1
      className={`text-3xl font-light ${upperCase && 'uppercase'} ${white ? 'text-white' : 'text-black'} mb-4`}
    >
      {children}
    </h1>
  )
}
