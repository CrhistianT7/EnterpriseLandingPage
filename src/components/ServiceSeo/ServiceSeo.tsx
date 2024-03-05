import Container from 'ui/Container/Container'
import { Question } from '../../components/ServiceSeo/Question/Question'
import Hero from './Hero/Hero'
import ServicesSeo from './ServicesSeo/ServicesSeo'
import FinalProject from './FinalProject/FinalProject'
import Technologies from './Technologies/Technologies'
import NavSeo from './NavSeo/NavSeo'

const ServiceSeo = () => {
  return (
    <div>
      <Hero />
      <Container size="xl">
        <ServicesSeo />
        <Question />
        <NavSeo />
      </Container>
      <FinalProject />
      <Technologies />
    </div>
  )
}

export default ServiceSeo
