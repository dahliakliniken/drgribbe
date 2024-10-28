type CardRowProps = {
  children: React.ReactNode
}

const CardRow = ({ children }: CardRowProps) => {
  return (
    <div className="overflow-x-auto py-4">
      <div className="flex w-[1000px] space-x-4 pl-4 lg:w-full">{children}</div>
    </div>
  )
}

export default CardRow
