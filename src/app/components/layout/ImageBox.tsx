import Image from 'next/image'

const ImageBox = () => {
  return (
    <div className="relative z-10 h-[388px] w-[393px]">
      <Image
        src="/images/Konsultation-med-patient-Tumba_N3A2763-1-scaled.png"
        layout="fill"
        objectFit="cover"
        alt={''}
      />
    </div>
  )
}

export default ImageBox
