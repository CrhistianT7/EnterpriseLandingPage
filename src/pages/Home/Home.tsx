import Container from 'ui/Container/Container'
import Hero from 'components/Hero/Hero'
import Services from 'components/Services/Services'
import Clients from 'components/Clients/Clients'

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
