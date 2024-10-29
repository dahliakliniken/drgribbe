import Image from 'next/image'
import DahliaLogo from '../../../../public/images/Logo.png'

const Logo = () => {
  return (
    <div className="flex w-full justify-center bg-[#EAE6E3]">
      {' '}
      {/* Fyller hela bredden och centrerar innehållet */}
      <Image src={DahliaLogo} alt="Dalia Logo" className="h-25" />
    </div>
  )
}

export default Logo
