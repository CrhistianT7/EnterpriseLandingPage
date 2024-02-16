import Container from 'ui/Container/Container'
import Hero from 'components/Hero/Hero'
// import Services from 'components/Services/Services'
// import Clients from 'components/Clients/Clients'
import ContactUs from 'components/ContactUs/ContactUs'

const Home = () => {
  return (
    <Container size="xl" isfullwidth>
      <Hero />
      {/* <Services /> */}
      {/* <Clients /> */}
      <ContactUs />
    </Container>
  )
}

export default Home
