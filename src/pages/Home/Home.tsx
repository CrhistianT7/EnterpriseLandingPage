import Hero from 'components/Hero/Hero'
import Clients from 'components/Clients/Clients'
import Container from 'ui/Container/Container'
import Services from 'components/Services/Services'

const Home = () => {
  return (
    <Container size="xl">
      <Hero />
      <Services />
      <Clients />
    </Container>
  )
}

export default Home
