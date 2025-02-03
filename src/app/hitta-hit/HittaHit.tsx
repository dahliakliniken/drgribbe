import { useTranslations } from 'next-intl'
import { MapPin, Car, Train } from 'lucide-react'
import { H1 } from '../components/typography/H1'
import { H2 } from '../components/typography/H2'
import { P } from '../components/typography/P'
import { Pillar } from '../components/layout/Pillar'
import { SpaceContainer } from '../components/layout/SpaceContainer'

const HittaHit = () => {
  const t = useTranslations()

  return (
    <SpaceContainer>
      <Pillar>
        <H1>{t('hittaHit.title')}</H1>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-start gap-2">
            <MapPin className="mt-1 h-6 w-6 flex-shrink-0" />
            <div>
              <H2>{t('hittaHit.heading')}</H2>
              <P>{t('hittaHit.address')}</P>
              <P>{t('hittaHit.addressDetails')}</P>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Car className="mt-1 h-6 w-6 flex-shrink-0" />
            <div>
              <H2>{t('hittaHit.parking')}</H2>
              <P>{t('hittaHit.parkingDetails')}</P>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="mt-1 flex flex-shrink-0 gap-2">
              <Train className="h-6 w-6" />
            </div>
            <div>
              <H2>{t('hittaHit.publicTransport')}</H2>
              <P>{t('hittaHit.publicTransportDetails')}</P>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.7876457461824!2d18.0279!3d59.3334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d74e8f35c51%3A0x7c0c07ce8d4e6c4f!2sSankt%20G%C3%B6ransgatan%20126%2C%20Stockholm!5e0!3m2!1sen!2sse!4v1623456789012!5m2!1sen!2sse"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          />
        </div>
      </Pillar>
    </SpaceContainer>
  )
}

export default HittaHit
