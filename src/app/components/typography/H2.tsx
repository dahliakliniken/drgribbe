type H2Props = {
  children: React.ReactNode
  white?: boolean
  upperCase?: boolean
}

const H2 = ({ children, white, upperCase }: H2Props) => {
  return (
    <h2
      className={`text-3xl font-light ${upperCase && 'uppercase'} ${white ? 'text-white' : 'text-black'} mb-4`}
    >
      {children}
    </h2>
  )
}

export default H2
