type H4Props = {
  children: React.ReactNode
  white?: boolean
  className?: string
}

export const H4 = ({ children, white, className }: H4Props) => {
  return (
    <h4 className={`${white && 'text-white'} mb-4 text-lg ${className}`}>
      {children}
    </h4>
  )
}
