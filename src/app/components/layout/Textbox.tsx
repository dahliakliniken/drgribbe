import Card from '../surfaces/Card'

const Textbox: React.FC = () => {
  return (
    <Card
      bgColor="bg-[#B06D74]"
      bgLeft
      title="BRÖSTOPERATION I STOCKHOLM"
      fullWidth
      paragraphs={[
        'Vi finns i Stockholm och tar emot patienter på vår mottagning som ligger på Kungsholmen.',
        'All personal är specialistutbildad och har flerårig erfarenhet. Det ger trygghet och säkerhet med minimal risk för komplikationer. Vi erbjuder ett brett utbud av bröstoperationer i Stockholm, inklusive bröstförstoring, bröstlyft, bröstförminskning och kombinerade ingrepp med implantat. Vi använder oss av de senaste teknikerna och material av högsta kvalitet för att säkerställa att du får bästa möjliga resultat.'
      ]}
    />
  )
}

export default Textbox
