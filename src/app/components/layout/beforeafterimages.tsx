import Image, { StaticImageData } from "next/image"

type BAImageProps = {
    beforeimage: StaticImageData
    afterimage: StaticImageData
}

export const BAImage = ({
    beforeimage,
    afterimage
}: BAImageProps) => {
    return (
        <div>
            <Image
                src={beforeimage}
                alt={''}
                className="mb-4"
            />
            <Image
                src={afterimage}
                alt={''}
                className="mb-4"
            />
        </div>   
    )
}