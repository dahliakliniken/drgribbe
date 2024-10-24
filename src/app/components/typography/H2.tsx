type H2Props = {
  children: React.ReactNode
}

const H2 = ({ children }: H2Props) => {
  return (
    <h2 className="font-josefin-sans text-white text-2xl font-light leading-tight">
      {children}
    </h2>
  )
}

export default H2
