import React from 'react';
const Footer: React.FC = () => {
  return (
    <footer className="left-0 z-50 w-full bg-white py-4">
      <div className="relative mx-auto flex max-w-screen-lg items-center justify-center flex-col text-center">
        <div className="text-sm">
          <p>Kontakta oss:</p>
          <p>Email: info@dahliakliniken.se</p>
          <p>Telefon: 012-345 67 89</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
