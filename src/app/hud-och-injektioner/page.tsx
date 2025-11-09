import { Metadata } from 'next'

import { canonicalUrl, ORG_ID, SITE_URL } from '@/app/config/site'
import { JsonLd } from '@/components/surfaces/JsonLd'

import HudOchInjektioner from './HudOchInjektioner'

export const metadata: Metadata = {
  title: 'Hud & injektioner - Dahliakliniken',
  description:
    'Det finns olika behandlingar med muskelavslappnande medel som kan ge fint och bra resultat. Muskelavslappnande kan användas mot behandling av rynkor och för medicinsk användning t.ex. mot spänningshuvudvärk och svettningar.',
  openGraph: {
    title: 'Hud & injektioner - Dahliakliniken',
    description:
      'Det finns olika behandlingar med muskelavslappnande medel som kan ge fint och bra resultat. Muskelavslappnande kan användas mot behandling av rynkor och för medicinsk användning t.ex. mot spänningshuvudvärk och svettningar.'
  },
  twitter: {
    title: 'Hud & injektioner - Dahliakliniken',
    description:
      'Det finns olika behandlingar med muskelavslappnande medel som kan ge fint och bra resultat. Muskelavslappnande kan användas mot behandling av rynkor och för medicinsk användning t.ex. mot spänningshuvudvärk och svettningar.'
  }
}

export default async function Page() {
  const canonical = canonicalUrl('/hud-och-injektioner')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TherapeuticProcedure',
        '@id': `${canonical}#therapy`,
        url: canonical,
        name: 'Hud & injektioner - Dahliakliniken',
        description:
          'Det finns olika behandlingar med muskelavslappnande medel som kan ge fint och bra resultat. Muskelavslappnande kan användas mot behandling av rynkor och för medicinsk användning t.ex. mot spänningshuvudvärk och svettningar.',
        image: {
          '@type': 'ImageObject',
          '@id': `${canonical}#primaryimage`,
          url: `${SITE_URL}/_next/static/media/ansiktsmuskler.0a0b245d.jpeg`
        },
        procedureType: 'PercutaneousProcedure',
        bodyLocation: [
          'Glabella (argrynka/bekymmersrynka)',
          'Panna',
          'Kråksparkar',
          'Mungipor (m. depressor anguli oris)',
          'Näsrygg (bunny lines)',
          'Läppkant (lip flip)',
          'Gummy smile',
          'Haka (m. mentalis)',
          'Platysma-band (hals)',
          'Masseter (bruxism)'
        ],
        mainEntityOfPage: { '@id': canonical },
        potentialAction: {
          '@type': 'ScheduleAction',
          target: `${SITE_URL}/boka`,
          name: 'Boka tid / konsultation'
        }
      },
      {
        '@type': 'MedicalWebPage',
        '@id': canonical,
        url: canonical,
        name: 'Hud & injektioner - Dahliakliniken',
        inLanguage: 'sv-SE',
        isPartOf: { '@id': `${SITE_URL}#website` },
        publisher: { '@id': ORG_ID },
        about: {
          '@id': `${canonical}#therapy`
        },
        primaryImageOfPage: {
          '@id': `${canonical}#primaryimage`
        },
        medicalAudience: 'Patient',
        specialty: 'PlasticSurgery',
        breadcrumb: {
          '@id': `${canonical}#breadcrumb`
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Hem',
            item: SITE_URL
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Hud & injektioner',
            item: `${SITE_URL}/hud-och-injektioner`
          }
        ]
      }
    ]
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <HudOchInjektioner />
    </>
  )
}
