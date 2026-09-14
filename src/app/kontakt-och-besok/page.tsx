import { BreadcrumbJsonLd } from '@/app/components/navigation/BreadcrumbJsonLd'
import { createPageMetadata } from '@/app/config/metadata'
import { canonicalUrl, CLINIC_ID, ORG_ID } from '@/app/config/site'
import { JsonLd } from '@/components/surfaces/JsonLd'
import {
  BUSINESS_ADDRESS,
  BUSINESS_CONTACT,
  BUSINESS_NAME
} from '@/data/businessData'

import KontaktOchBesok from './KontaktOchBesok'

export const metadata = createPageMetadata({
  title: 'Kontakt & besök - Dahliakliniken',
  description:
    'Kontakta Dahliakliniken i Stockholm. Boka konsultation online eller på plats hos Dr Örjan Gribbe. Telefon, e-post och vägbeskrivning.',
  path: '/kontakt-och-besok'
})

const clinicJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': CLINIC_ID,
  name: BUSINESS_NAME,
  url: canonicalUrl(),
  image: `${canonicalUrl()}/images/wonna-tower-img-7027.png`,
  telephone: BUSINESS_CONTACT.telephone,
  email: BUSINESS_CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS_ADDRESS.streetAddress,
    addressLocality: BUSINESS_ADDRESS.addressLocality,
    postalCode: BUSINESS_ADDRESS.postalCode,
    addressCountry: BUSINESS_ADDRESS.addressCountry
  },
  parentOrganization: { '@id': ORG_ID }
}

export default function Page() {
  return (
    <>
      <JsonLd id="jsonld-clinic-contact" data={clinicJsonLd} />
      <BreadcrumbJsonLd path="/kontakt-och-besok" />
      <KontaktOchBesok />
    </>
  )
}
