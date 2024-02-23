import Hero from './Hero/Hero'
import { SectioHeroWrapper } from './ServiceSeo.styles'
import ServicesSeo from './ServicesSeo/ServicesSeo'

const ServiceSeo = () => {
  return (
    <div>
      <SectioHeroWrapper type="padding" size={'xl'}>
        <Hero />
      </SectioHeroWrapper>
      <ServicesSeo />
    </div>
  )
}

export default ServiceSeo
