type SectionProps = {
  children: React.ReactNode
}

export const Section = ({ children }: SectionProps) => {
  return <section className="mb-8">{children}</section>
}
