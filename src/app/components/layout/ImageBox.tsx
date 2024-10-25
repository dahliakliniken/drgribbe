import Image from 'next/image';

const ImageBox = () => {
  return (
    <div className="relative z-10 h-[388px] w-full"> {/* Full bredd */}
      <Image
        src="/images/Konsultation-med-patient-Tumba_N3A2763-1-scaled.png"
        layout="fill"  // Fyller ut hela föräldern
        objectFit="cover"  // Täcker hela ytan
        alt={''}
      />
    </div>
  );
};

export default ImageBox;
