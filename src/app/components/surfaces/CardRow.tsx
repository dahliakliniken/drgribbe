import { Children } from 'react'

type CardRowProps = {
  children: React.ReactNode
}

const CardRow = ({ children }: CardRowProps) => {
  return (
    <div className="px-gapSpace flex space-x-4 overflow-x-auto lg:grid lg:grid-cols-4 lg:items-stretch">
      {/* <div className="flex space-x-4 overflow-x-auto px-4 lg:grid lg:grid-cols-4 lg:px-0"> */}
      {Children.map(children, (child, index) => (
        <div key={index} className="w-3/4 flex-none sm:w-1/2 lg:w-auto">
          {child}
        </div>
      ))}
    </div>
  )
}

export default CardRow
