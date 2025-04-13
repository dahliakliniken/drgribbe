import { useTranslations } from 'next-intl'

import { P } from '@/app/components/typography/P'

export const useAccordionItems = () => {
  const t = useTranslations()

  const complications = [
    {
      id: crypto.randomUUID(),
      title: 'Kapsebildning, hård kapsel, kapselkontraktion.',
      content: (
        <>
         <P font-bold>{'Kapseln, en naturlig följd av en bröstoperation.'}</P>
        <P>{'När bröstimplantat eller något annat främmande material läggs in i kroppen reagerar kroppen med att bilda en hinna, ett hölje av ärrvävnad runt bröstimplantaten. Denna ärrvävnad kallas för en kapsel och är kroppens naturliga sätt att ta hand om bröstimplantaten. Normalt så skapar kroppen en mjuk, tunn kapsel vilket gör att när man känner på brösten så känner man inte kapseln utan man känner bröstens och bröstimplantatens naturliga mjukhet. I sällsynta fall (under 1%) och oftast bara på ena sidan bildar kroppen ett tjockare och hårdare kapsel vilket gör att det drabbade bröstet känns fastare och hårdare. Man brukar prata om hård kapsel. Det är då inte heller ovanligt att den förtjockade och fastare kapseln drar ihop sig vilket gör att bröstimplantatet och bröstet upplevs mindre i volym och ofta även smalare. Detta kallas för kapselsammandragning eller kapselkontraktion. När kapseln drar ihop sig brukar den också putta upp bröstimplantatet på bröstkorgen vilket gör att bröstet får ett mer onaturligt och up-pushat utseende. En tjockare kapsel som drar ihop sig kan även skapa mer eller mindre uttalade smärtor. Dessa smärtor kan vara konstanta men det är vanligare att de kommer och går. Hur tydliga symtomen är varierar mycket från patient till patient. Ibland ger det mycket diskreta symtom och ibland, särskilt om den fått utvecklas under många år, så ger den tydligare symtom. '}</P>
        <P font-bold>{'En hård kapsel är inte farlig.'}</P>
        <P>{'Det är viktigt att förstå att hård kapsel och kapselsammadragning är inte farligt. Kapseln är naturlig och det varierar från person till person hur den blir. '}</P>
        <P font-bold>{'Kapseloperation, bara om man har besvär och patienten bestämmer.'}</P>
        <P>{'Om kapseln skapar problem med ett fastare bröst eller ibland även smärtor så kan man åtgärda det med en kapseloperation. Den går till som så att man i narkos tar ut bröstimplantatet, opererar kapseln och sedan lägger tillbaka bröstimplantatet. Problemet är då oftast åtgärdat och patientens problem försvinner. Huruvida man ska operera kapsel beror helt på patientens besvär. Det är patienten som bestämmer om besvären är sådana att hon önskar operation eller ej. Ibland är kapseln lite stram och patienten märker det inte. Det är då inte ett problem och man ska inte göra en operation. Man kan säga att det är som en skala från å ena sidan mjuk kapsel till väldigt hård och sammandragen kapsel. Sedan finns det många varianter däremellan från lite stramare och fastare kapsel till mer och mer tjock, hård och sammandragen kapsel. '}</P>
        <P font-bold>{'En fastare kapsel har fördelar.'}</P>
        <P>{'En tunn mjuk kapsel har fördelen att man tydligt känner bröstimplantatens konsistens och mjukhet. En hård kapsel kan skapa problem enligt ovan. Däremellan finns många varianter på mer eller mindre tjock och stram kapsel som inte ger patienten några som helst besvär. Fördelen med en lite tjockare och stramare kapsel utan besvär är att den ger ett bättre stöd för bröstimplantaten än en tunn och mjuk kapsel. Den stramare kapseln hindrar bröstimplantaten från att falla ner eller åt sidorna vilket är extra fördelaktigt om man valt lite större bröstimplantat.'}</P>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: 'Känselstörningar',
      content: (
        <>
            <P font-bold>{'Nedsatt känsel i huden'}</P>
            <P>{'Efter en bröstoperation kan man, precis som efter vilken annan operation som helst där man skär genom huden, få övergående känselstörningar. Efter en bröstoperation händer det då och då och att man kring ärret får en nedsatt känsel för beröring under ett tag efter operationen. Ofta kommer känseln tillbaka efter några månader. I ovanliga fall så tar det upp till två år innan känseln återkommer helt. I mycket ovanliga fall blir känselnedsättningen permanent och i ytterst ovanliga fall så kan detta även drabba bröstvårta, vårtgård.'}</P>
            <P font-bold>{'Ökad känsel i huden'}</P>
            <P>{'En annan form av känselstörning är att vissa patienter ett tag efter operationen kan uppleva en ökad känsel, en överkänslighet (hyperestesi) i huden kring ärret och ibland upp en bit på själva bröstet. Känslan kan vara att beröring känns mer och ibland kan beröring av huden också kännas obehaglig. Vissa upplever en ytlig, brännande känsla. Denna obehagliga känsla är i princip alltid övergående och kommer ibland i samband med att känseln i huden är på väg att komma tillbaka efter att den först nedsatt. För att förebygga ökad känsel i huden, hyperestesi är det bra att beröra, stryka på huden med fingrarna. Man lär då huden och hjärnan att det faktiskt handlar om normal beröring.'}</P>            
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: 'ALCL',
      content: (
        <>
              <P font-bold>{'Ovanligt lymfom'}</P>
              <P>{'Det senaste årtiondet har en mycket ovanlig form av lymfom, Anaplastiskt storcelligt lymfom ALCL (Breast Implant Associated Anaplastic Large Cell Lymphoma, BIA-ALCL) uppmärksammats efter operation med texturerade bröstimplantat. Orsaken är oklar men man tror att det beror på genetiska faktorer hos den drabbade individen i kombination med inflammatoriska mekanismer som den texturerade ytan på bröstimplantaten ibland skapat. Initialt visste man inte så mycket om vilka bröstimplantat som kunde orsaka ALCL men det har visat sig att det endast är just texturerade, knottriga bröstimplantat och inte släta bröstimplantat. Viktigt att förstå är att ALCL inte är eller har något samband med bröstcancer och att inga bröstimplantat ökar risken för bröstcancer.'}</P>
              <P font-bold>{'Olika textureringar, olika risk'}</P>
              <P>{'Det har visat sig att det är stor skillnad hur vanligt ALCL är mellan olika märken och därmed olika typer av texturering. Allergan till exempel hade en grov texturering på sina bröstimplantat där det visade sig att risken var 1 på ca 2500 patienter. Risken ansågs då så hög att denna texturering förbjöds. Mentors texturering Siltex har visats ha en risk på 1 på ca 87 000 vilket är en mycket låg risk varför dessa bröstimplantat är fullt tillåtna och de används både vid estetiska bröstförstoring och inom sjukvården vid rekonstruktioner efter bröstcancer.'}</P>            
              <P font-bold>{'Behandling'}</P>
              <P>{'Skulle det då handla om ALCL, remitteras patienten till sjukvården där man tar bort implantat och omkringliggande kapsel. Oftast så är patienten botad och risken för spridning i kroppen är låg. Rekommendationen är sedan att man hos patienten fortsättningsvis använder släta bröstimplantat.'}</P>               
        </>
      )
    }
  ]

  const surgeryItems = [
    {
      id: crypto.randomUUID(),
      title: t('brostoperationer.surgery.preparation'),
      content: (
        <>
          <P>{t('brostoperationer.surgery.text2')}</P>
          <P>{t('brostoperationer.surgery.text2-2')}</P>
          <P>{t('brostoperationer.surgery.text2-3')}</P>
          <P>{t('brostoperationer.surgery.text2-4')}</P>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('brostoperationer.surgery.anesthesia'),
      content: (
        <>
          <P>{t('brostoperationer.surgery.text3')}</P>
          <P>{t('brostoperationer.surgery.text4')}</P>
          <P>{t('brostoperationer.surgery.text5')}</P>
          <P>{t('brostoperationer.surgery.text6')}</P>
          <P>{t('brostoperationer.surgery.text7')}</P>
          <P>{t('brostoperationer.surgery.text7-2')}</P>
          <P>{t('brostoperationer.surgery.text7-3')}</P>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('brostoperationer.surgery.duringOperation'),
      content: (
        <>
          <P>{t('brostoperationer.surgery.text8')}</P>
          <P>{t('brostoperationer.surgery.text9')}</P>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('brostoperationer.surgery.care'),
      content: (
        <>
          <P>{t('brostoperationer.surgery.text10')}</P>
          <P>{t('brostoperationer.surgery.text11')}</P>
        </>
      )
    }
  ]

  return [surgeryItems, complications]
}
