import { Children } from 'react'

type CardRowProps = {
  children: React.ReactNode
}

const CardRow = ({ children }: CardRowProps) => {
  return (
    <div className="px-gapSpace flex space-x-4 overflow-x-auto lg:grid lg:grid-cols-4 lg:items-stretch">
      {Children.map(children, (child, index) => (
        <div key={index} className="w-[90%] flex-none sm:w-1/2 lg:w-auto">
          {child}
        </div>
      ))}
    </div>
  )
}

export default CardRow
