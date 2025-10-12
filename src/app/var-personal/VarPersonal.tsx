import { useTranslations } from 'next-intl'

import { Pillar } from '@/components/layout/Pillar'
import { SpaceContainer } from '@/components/layout/SpaceContainer'
import { FlippableCard } from '@/components/surfaces/FlippableCard'
import { H1 } from '@/components/typography/H1'

import anna from '../../../public/images/Anna.png'
import johanna from '../../../public/images/Johanna.png'
import kristina from '../../../public/images/kristina.jpg'
// import malin from '../../../public/images/Malin.png'
import najwa from '../../../public/images/Najwa.png'
import orjan from '../../../public/images/orjan.png'
import selda from '../../../public/images/selda.png'

const VarPersonal = () => {
  const t = useTranslations()
  const staff = [
    {
      id: crypto.randomUUID(),
      name: 'Örjan Gribbe',
      titles: ['Leg läkare', 'Medicine doktor', 'Specialist i plastikkirurgi'],
      image: orjan,
      description:
        'Dr Gribbe utbildade sig till läkare vid Karolinska Institutet och efter detta till plastikkirurg vid Karolinska Universitetssjukhuset i Stockholm. På Karolinska var Dr Gribbe verksam som rekonstruktiv plastikkirurg inom till exempel rekonstruktioner efter cancer i ansiktet och brösten. Dr Gribbe har även disputerat inom plastikkirurgi och fysiologi vid Karolinska Institutet. Under tiden som doktorand undervisade han regelbundet i bland annat ämnet fysiologi och utnämndes ett år till bästa läraren på sjukgymnastutbildningen. De senaste 17 åren har Dr Gribbe ägnat sig åt privat, estetisk plastikkirurgi på heltid och han har utfört cirka 8 000 operationer inom bröst- och kroppsformande kirurgi. Dr Gribbes arbetssätt kännetecknas av högsta kvalitet samt tillgänglighet före och efter ingreppen vilket ger välinformerade, trygga och nöjda patienter.'
    },
    {
      id: crypto.randomUUID(),
      name: 'Kristina',
      titles: ['Reception och övrig administration'],
      image: kristina,
      //description: "Doktorinnan och jur. kand. Kristina är klinikens receptionist, administratör, husfru och omvårdnadsexpert. Hon är lugn, positiv och varmhjärtad. Kristina är mycket mån om och har ett genuint intresse för varje enskild patient. Hon ser till att du som patient får hjälp med allt och mer därtill. Kristina hjälper dig med bokning av möten med Dr Gribbe, lugnar med samtal och information inför operationen, serverar den perfekta postoperativa måltiden, förmanar om väskan din är för tung och ett gläds åt att träffa dig på återbesöken."
      description:
        'Doktorinnan och jur. kand. Kristina är klinikens receptionist, administratör och husfru. Hon är lugn, positiv och godhjärtad. Kristina är mån om varje enskild patient och ser till att du får hjälp med allt och mer därtill.'
    },
    {
      id: crypto.randomUUID(),
      name: 'Najwa Al-Ibrahim',
      titles: ['Narkosläkare'],
      image: najwa,
      description:
        'Dr Najwa har mycket stor erfarenhet av att söva och har ett stort hjärta. Hon är mycket mån om att patienterna ska känna sig trygga och sedda och lägger stor vikt vid säkerheten före, under och efter operationen. Dr Najwa är ursprungligen från Bagdad där hon utbildade sig till läkare och specialist i anestesi- och intensivvård. Hon arbetade under 10 år på olika sjukhus i Irak och då även under kriget mellan Iran och Irak. Dr Najwa kom till Sverige 1992 och arbetade de första 15 åren med anestesi- och intensivvård på Danderyds och Norrtälje sjukhus. Efter detta har hon varit verksam på Elisabethsjukhuset i Uppsala under många år samt även på privata kliniker i London, Oslo och Stockholm.'
    },
    /*   {
      id: crypto.randomUUID(),
      name: 'Karin Björkman',
      titles: ['Narkosläkare']
    }, */
    {
      id: crypto.randomUUID(),
      name: 'Anna Berggren',
      titles: ['Narkossjuksköterska'],
      image: anna,
      description:
        'Anna är lugn, noggrann och håller sig till av henne upparbetade rutiner för patienternas trygghet och säkerhet. Du träffar Anna innan operationen där hon bland annat ger dig premedicinering och skapar ett lugn. Efter operationen vakar hon över dig på uppvaket, hjälper dig upp ur sängen och ser till att minimera smärta och illamående. Anna har över 30 års erfarenhet som narkossjuksköterska. Efter utbildningen på Karolinska Huddinge har hon arbetat på bland annat Karolinska Solna, Akademikliniken, Hudiksvalls sjukhus och Akademiska sjukhuset i Uppsala.'
    },
    {
      id: crypto.randomUUID(),
      name: 'Johanna Berg',
      titles: ['Operationssjuksköterska'],
      image: johanna,
      description:
        'Sjuksköterska Johanna är glad och positiv. Hon är lyhörd för patienternas behov och är alltid fokuserad och noggrann under operationerna för att dessa ska ske så säkert och effektivt som möjligt. Johanna utbildade sig till operationssjuksköterska på Akademiska sjukhuset i Uppsala där hon sedan arbetade under flera år. Johanna är mycket erfaren och har arbetat med många olika specialiteter såsom gynekologi, obstetrik, urologi, transplantation, kirurgi och ortopedi på olika sjukhus i Stockholm.'
    },
    /*{
      id: crypto.randomUUID(),
      name: 'Malin Bosson',
      titles: ['Operationssjuksköterska'],
      image: malin
    },*/
    {
      id: crypto.randomUUID(),
      name: 'Selda Demirkiran',
      titles: ['Undersköterska'],
      image: selda,
      description:
        'Selda är en lugn och positiv undersköterska som du träffar när du kommer in på operationssalen. Hon hjälper till före, under och efter operationen. Hon stoppar om dig på operationsbordet och ser till att du ligger bekvämt. Selda assisterar operationssjuksköterskan och narkosläkaren på operationssalen och plockar fram de instrument, suturer och förband som behövs. Efter operationens slut hjälper hon till att varsamt ta på dig förbands-bh och försiktigt flytta över dig till sängen. Selda utbildade sig till undersköterska på Karolinska Huddinge. Hon har arbetat på flera närakuter och på operationsavdelning på Karolinska Huddinge och Considra gynekologi.'
    }
  ]

  return (
    <Pillar>
      <SpaceContainer>
        <H1>{t('varPersonal.title')}</H1>
        <ul className="grid gap-6 md:grid-cols-2">
          {staff.map((member) => (
            <li key={member.id} className="relative">
              <FlippableCard member={member} />
            </li>
          ))}
        </ul>
      </SpaceContainer>
    </Pillar>
  )
}

export default VarPersonal
