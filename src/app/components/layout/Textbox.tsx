import React from 'react';

const Textbox: React.FC = () => {
  return (
    <div
      className="flex flex-col items-start justify-center bg-[#B06D74] opacity-100"
      style={{
        width: '393px',       
        height: '597px',      
        padding: '56px 30px', 
        gap: '30px',          
        marginTop: '-10px',   
      }}
    >
      {/* Headline */}
      <h1
        className="text-white"
        style={{
          width: '333px',
          height: '64px',
          fontFamily: 'Josefin Sans',
          fontSize: '32px',
          fontWeight: 300,
          lineHeight: '32px',
          textAlign: 'left',
          opacity: 1,
          marginTop: '10px',
        }}
      >
        BRÖSTOPERATION I STOCKHOLM
      </h1>
      
      {/* Text content */}
      <p
        className="mt-1 text-white" 
        style={{
          width: '333px',
          fontFamily: 'Josefin Sans',
          fontSize: '20px',
          fontWeight: 300,
          lineHeight: '23.2px',
          letterSpacing: '0.06em',
          textAlign: 'left',
          opacity: 1,
        }}
      >
        Vi finns i Stockholm och tar emot patienter på vår mottagning som ligger på Kungsholmen.
      </p>
      
      {/* Nytt stycke */}
      <p
        className="mt-1 text-white" 
        style={{
          width: '333px',
          fontFamily: 'Josefin Sans',
          fontSize: '20px',
          fontWeight: 300,
          lineHeight: '23.2px',
          letterSpacing: '0.06em',
          textAlign: 'left',
          opacity: 1,
        }}
      >
        All personal är specialistutbildad och har flerårig erfarenhet. Det ger trygghet och säkerhet 
        med minimal risk för komplikationer. Vi erbjuder ett brett utbud av bröstoperationer i Stockholm, 
        inklusive bröstförstoring, bröstlyft, bröstförminskning och kombinerade ingrepp med implantat. 
        Vi använder oss av de senaste teknikerna och material av högsta kvalitet för att säkerställa att 
        du får bästa möjliga resultat.
      </p>
    </div>
  );
};

export default Textbox;
