import { useTranslations } from 'next-intl'

import { P } from '../components/typography/P'

export const usePolicyAccordionItems = () => {
  const t = useTranslations('Personuppgiftspolicy')
  const rightsItems = [
    {
      id: crypto.randomUUID(),
      title: t('rightsaccordion.question1.question'),
      content: <P small>{t('rightsaccordion.question1.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('rightsaccordion.question2.question'),
      content: <P small>{t('rightsaccordion.question2.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('rightsaccordion.question3.question'),
      content: <P small>{t('rightsaccordion.question3.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('rightsaccordion.question4.question'),
      content: <P small>{t('rightsaccordion.question4.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('rightsaccordion.question5.question'),
      content: <P small>{t('rightsaccordion.question5.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('rightsaccordion.question6.question'),
      content: <P small>{t('rightsaccordion.question6.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('rightsaccordion.question7.question'),
      content: <P small>{t('rightsaccordion.question7.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('rightsaccordion.question8.question'),
      content: <P small>{t('rightsaccordion.question8.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('rightsaccordion.question9.question'),
      content: (
        <div>
          <P small>
            {
              'I vissa fall kan dina personuppgifter ibland behöva överföras till eller delas med andra, när det är nödvändigt eller motiverat. Till exempel kan dina personuppgifter delas med:'
            }
          </P>
          <ul>
            <li>
              <P>{'Anställda hos oss'}</P>
              <P small>
                {
                  'Personalen som arbetar har tillgång till dina personuppgifter. Vilka personuppgifter de har tillgång till beror på deras roll.'
                }
              </P>
              <p></p>
            </li>
            <li>
              <P>{'Leverantörer och underleverantörer'}</P>
              <P small>
                {
                  'Dina personuppgifter delas med leverantörer och underleverantörer som levererar olika typer av tjänster. Leverantörerna är bundna av sekretess, Om du vill veta vilka leverantörer det gäller ber vid dig ta kontakt med oss.'
                }
              </P>
              <p></p>
            </li>
            <li>
              <P>{'Remisser och recept på läkemedel'}</P>
              <P small>
                {
                  'I vissa fall behöver du en remiss till en läkarmottagning, och då kommer remiss skickas dit. Skulle du behöva läkemedel kommer i vanliga fall ett recept skickas elektroniskt till alla svenska apotek. Vissa särskilda recept skall dock skickas till ett namngivet apotek, men i normalfallet kan alla apotek se ditt recept.'
                }
              </P>
              <p></p>
            </li>
            <li>
              <P>{'Myndigheter'}</P>
              <P small>
                {
                  'Vi kan komma att lämna ut personuppgifter till tredje part om vi är skyldiga att lämna ut sådan uppgift med stöd av lag eller myndighetsbeslut.Om du vill ha mer information om de uppgifter som kan lämnas till myndigheter ber vi dig att ta kontakt med oss.'
                }
              </P>
              <p></p>
            </li>
          </ul>
        </div>
      )
    }
  ]

  const policyItems = [
    {
      id: crypto.randomUUID(),
      title: t('policyaccordion.question1.question'),
      content: <P small>{t('policyaccordion.question1.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('policyaccordion.question2.question'),
      content: <P small>{t('policyaccordion.question2.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('policyaccordion.question3.question'),
      content: <P small>{t('policyaccordion.question3.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('policyaccordion.question4.question'),
      content: <P small>{t('policyaccordion.question4.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('policyaccordion.question5.question'),
      content: (
        <div>
          <P small>{'Vi behandlar dina personuppgifter för'}</P>
          <ul>
            <li>
              <P small>
                {
                  '- att utföra de behandlingar och ingrepp som efterfrågats och för att kunna säkerställa en korrekt medicinsk behandling och uppföljning samt ge råd inför och i samband med detta.'
                }
              </P>
            </li>
            <li>
              <P small>
                {
                  '- administration i syfte att kunna utföra de behandlingar och ingrepp som efterfrågats.'
                }
              </P>
            </li>
            <li>
              <P small>
                {
                  '- att fullgöra de skyldigheter som anges i patientdatalagen om att föra patientjournal och upprätta annan dokumentation som behövs i och för din vård.'
                }
              </P>
            </li>
            <li>
              <P small>
                {
                  '- för att kunna upprätta annan dokumentation som följer av lag, förordning eller annan författning.'
                }
              </P>
            </li>
            <li>
              <P small>
                {
                  '- hantering och utredning av eventuella klagomål och händelser som har medfört eller hade kunnat medföra allvarlig vårdskada (lex Maria) samt anmälan av detta till Inspektionen för vård och omsorg (”IVO”).'
                }
              </P>
            </li>
            <li>
              <P small>{'- för eventuell utlämning av journal.'}</P>
            </li>
            <li>
              <P small>
                {
                  '- för att skicka och hantera remisser samt förskrivning av läkemedel.'
                }
              </P>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('policyaccordion.question6.question'),
      content: <P small>{t('policyaccordion.question6.answer')}</P>
    }
  ]

  return [policyItems, rightsItems]
}
