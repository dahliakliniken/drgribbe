type H3Props = {
  children: React.ReactNode
  white?: boolean
  className?: string
}

export const H3 = ({ children, white, className }: H3Props) => {
  return (
    <h3 className={`${white && 'text-white'} text-2xl mb-4 font-light ${className}`}>
      {children}
    </h3>
  )
}
