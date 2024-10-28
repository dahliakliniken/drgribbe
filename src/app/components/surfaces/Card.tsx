import Image, { StaticImageData } from 'next/image'
import H2 from '../typography/H2'
import P from '../typography/P'

type CardProps = {
  title: string
  paragraphs: string[]
  bgColor: string // TODO: Define and set specific color types
  image?: StaticImageData | string
  style?: React.CSSProperties
  oneColumn?: boolean
  fullWidth?: boolean
  bgRight?: boolean
  bgLeft?: boolean
  bgCenter?: boolean
}

const Card = ({
  title,
  paragraphs,
  bgColor,
  image,
  oneColumn,
  fullWidth,
  bgRight,
  bgLeft
}: CardProps) => {
  return (
    <div
      className={`p-6 ${bgColor} relative ${!fullWidth && 'w-4/5 max-w-[350px]'} flex-shrink-0`}
    >
      {/* Pseudo-element for background image */}
      <div
        className={`${bgLeft && 'bg-left-top'} ${bgRight && 'bg-right-top'} absolute inset-0 z-0 bg-card-pattern bg-200 bg-no-repeat opacity-5`}
      />

      {/* H2 with white text */}
      <H2 color="text-white">{title}</H2>

      <div
        className={`columns-1 gap-4 ${oneColumn ? 'columns-1' : 'lg:columns-3'}`}
      >
        {/* Image column, only shown if an image is provided */}
        {image && (
          <div className="mb-2 text-center">
            <Image className="m-auto" src={image} alt={''} />
          </div>
        )}
        {paragraphs.map((paragraph, idx) => (
          <P key={`${paragraph}-${idx}`} color="text-white">
            {paragraph}
          </P>
        ))}
      </div>
    </div>
  )
}

export default Card
