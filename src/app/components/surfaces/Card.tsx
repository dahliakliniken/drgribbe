import P from '../typography/P'

type CardProps = {
  title: string
  paragraphs: string[]
  bgColor: string // TODO: Define and set specific color types
  image?: string // Optional image for desktop layout
}

const Card = ({ title, paragraphs, bgColor, image }: CardProps) => {
  return (
    <div className={`p-6 ${bgColor} relative`}>
      {/* Pseudo-element for background image */}
      <div className="absolute inset-0 z-0 bg-card-pattern bg-200 opacity-5" />
      {/* // TODO: Refactor this into a separate component */}
      <h2
        className="font-josefin-sans text-white"
        style={{
          height: '64px',
          fontSize: '32px',
          fontWeight: 300,
          lineHeight: '32px',
          marginTop: '10px'
        }}
      >
        {title}
      </h2>
      <div className="columns-1 gap-4 lg:columns-3">
        {/* Image column, only shown if an image is provided */}
        {image && (
          <div className="sm:col-span-1">
            <img
              src={image}
              alt="Card Image"
              className="h-auto w-full rounded-lg"
            />
          </div>
        )}

        {paragraphs.map((paragraph, idx) => (
          //TODO: remember to change key to something unique
          // Bad practice to use index as key
          <P key={idx}>{paragraph}</P>
        ))}
      </div>
    </div>
  )
}

export default Card
