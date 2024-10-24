import React from 'react'
import P from '../typography/P'
const Footer: React.FC = () => {
  return (
    <footer className="left-0 z-50 w-full bg-white py-4">
      <div className="relative mx-auto flex max-w-screen-lg items-center justify-center flex-col text-center">
        <div className="text-sm">
          <P>Kontakta oss:</P>
          <P>Email: info@dahliakliniken.se</P>
          <P>Telefon: 012-345 67 89</P>
        </div>
      </div>
    </footer>
  );
}

export default Footer
