import Image, { StaticImageData } from 'next/image'

type BAImageProps = {
  beforeimage: StaticImageData
  afterimage: StaticImageData
  beforeAlt: string
  afterAlt: string
}

export const BAImage = ({
  beforeimage,
  afterimage,
  beforeAlt,
  afterAlt
}: BAImageProps) => {
  return (
    <div>
      <Image src={beforeimage} alt={beforeAlt} className="mb-4" />
      <Image src={afterimage} alt={afterAlt} className="mb-4" />
    </div>
  )
}
