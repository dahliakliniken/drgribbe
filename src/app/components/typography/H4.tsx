type H4Props = {
  children: React.ReactNode
  white?: boolean
  className?: string
}

export const H4 = ({ children, white, className }: H4Props) => {
  return (
    <h4 className={`${white && 'text-white'} text-lg mb-4 ${className}`}>
      {children}
    </h4>
  )
}
