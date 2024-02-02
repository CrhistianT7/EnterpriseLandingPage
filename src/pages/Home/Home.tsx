import Hero from 'components/Hero/Hero'
import Clients from 'components/Clients/Clients'
import Container from 'ui/Container/Container'
import Services from 'components/Services/Services'

const Home = () => {
  return (
    <div>
      <Container size="lg">
        <Hero />
        <section id="portafolio" style={{ height: '100vh' }}>
          <h3>Portafolio</h3>
          Portafolio / clients / parterns
        </section>
        <Services />
        <Clients />
        <section>Our stack/ nuestras tecnologias?</section>
      </Container>
    </div>
  )
}

export default Home
