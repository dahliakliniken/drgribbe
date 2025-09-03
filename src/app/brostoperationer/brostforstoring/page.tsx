import { Metadata } from 'next'

import { JsonLd } from '@/app/components/surfaces/JsonLd'
import { canonicalUrl,SITE_URL } from '@/app/config/site'

import Brostforstoring from './Brostforstoring'

export const metadata: Metadata = {
  title: 'Bröstförstoring i Stockholm - Dahliakliniken',
  description:
    'Brösten är för de flesta kvinnor mycket viktiga. De representerar kvinnlighet, skönhet och symboliserar fruktbarhet. Här kan du läsa om hur processen för bröstförstoring går till.',
  openGraph: {
    title: 'Bröstförstoring i Stockholm - Dahliakliniken',
    description:
      'Brösten är för de flesta kvinnor mycket viktiga. De representerar kvinnlighet, skönhet och symboliserar fruktbarhet. Här kan du läsa om hur processen för bröstförstoring går till.'
  },
  twitter: {
    title: 'Bröstförstoring i Stockholm - Dahliakliniken',
    description:
      'Brösten är för de flesta kvinnor mycket viktiga. De representerar kvinnlighet, skönhet och symboliserar fruktbarhet. Här kan du läsa om hur processen för bröstförstoring går till.'
  }
}

export default async function Page() {
  const canonical = canonicalUrl('/brostoperationer/brostforstoring')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SurgicalProcedure',
        '@id': `${canonical}#procedure`,
        url: canonical,
        name: 'Bröstförstoring i Stockholm - Dahliakliniken',
        description:
          'Bröstförstoring är en plastikkirurgisk operation som syftar till att öka bröstens storlek och förbättra deras form. Detta kan göras genom att använda implantat eller genom att flytta fett från andra delar av kroppen.',
        image: {
          '@type': 'ImageObject',
          '@id': `${canonical}#primaryimage`,
          url: `${SITE_URL}/_next/static/media/_N3A7297.c20ccefe.jpg`
        },
        mainEntityOfPage: { '@id': canonical },
        potentialAction: {
          '@type': 'ScheduleAction',
          target: `${SITE_URL}/boka`
        }
      },
      {
        '@type': 'MedicalWebPage',
        '@id': canonical,
        url: canonical,
        name: 'Bröstförstoring i Stockholm - Dahliakliniken',
        inLanguage: 'sv-SE',
        isPartOf: { '@id': `${SITE_URL}#website` },
        publisher: { '@id': `${SITE_URL}#organization` },
        about: { '@id': `${canonical}#procedure` },
        breadcrumb: { '@id': `${canonical}#breadcrumb` },
        primaryImageOfPage: { '@id': `${canonical}#primaryimage` }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Hem',
            item: `${SITE_URL}/`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Bröstoperationer',
            item: `${SITE_URL}/brostoperationer`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Bröstförstoring',
            item: canonical
          }
        ]
      }
    ]
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <Brostforstoring />
    </>
  )
}
