import Container from 'ui/Container/Container'
import { Question } from '../../components/ServiceSeo/Question/Question'
import Hero from './Hero/Hero'
import { SectioHeroWrapper } from './ServiceSeo.styles'
import ServicesSeo from './ServicesSeo/ServicesSeo'
import FinalProject from './FinalProject/FinalProject'
import Technologies from './Technologies/Technologies'

const ServiceSeo = () => {
  return (
    <div>
      <SectioHeroWrapper type="padding" size={'xl'}>
        <Hero />
      </SectioHeroWrapper>
      <Container size="xl">
        <ServicesSeo />
        <Question />
      </Container>
      <FinalProject />
      <Technologies />
    </div>
  )
}

export default ServiceSeo
