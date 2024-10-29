type H3Props = {
  children: React.ReactNode
  white?: boolean
}

const H3 = ({ children, white }: H3Props) => {
  return (
    <h3 className={`${white && 'text-white'} text-3xl font-light`}>
      {children}
    </h3>
  )
}

export default H3
