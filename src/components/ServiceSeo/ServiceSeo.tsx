import Hero from './Hero/Hero'
import { SectioHeroWrapper } from './ServiceSeo.styles'

const ServiceSeo = () => {
  return (
    <SectioHeroWrapper type="padding" size={'xl'}>
      <Hero />
      <div></div>
    </SectioHeroWrapper>
  )
}

export default ServiceSeo
