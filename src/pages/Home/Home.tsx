import Footer from 'components/Footer/Footer'
import Hero from 'components/Hero/Hero'
import Navbar from 'components/Navbar/Navbar'
import Container from 'ui/Container/Container'

const Home = () => {
  return (
    <div>
      <Container size="lg">
        <Navbar />
      </Container>
      <Container size="lg">
        <Hero />
        <section id="portafolio" style={{ height: '100vh' }}>
          <h3>Portafolio</h3>
          Portafolio / clients / parterns
        </section>
        <section>
          <h3>Services</h3>
          <div>
            - Capataciónes de phising, navegación sobre internet - Web
            development - E-commerce - Realidad aumentada - //lentes de facebook
            - Ikea // Realidad Virtual - App development - SEO - Marketing
            Digital - Branding - Diseñador - Migraciones a la nube - Cloud
            computing en general - Diseño UX/UI * Description abajo con nab algo
            - aumento de equipo - transformación digital - ecommerce - section
            de los desarrolladores, porque somos la unica prueba viviente por
            ahora-
          Branding - Diseñador - Migraciones a la nube - Cloud computing en
          general - Diseño UX/UI * Description abajo con nab algo
          - aumento de equipo 
          - transformación digital - digitalizacion, Marketing digital
          - ecommerce
          - section de los desarrolladores, porque somos la unica prueba viviente por ahora
          - servicio de restaurantes para pedir comida, gratis pocos servicios y y mas caracteristicas de paga
          - seguro/suscription para resolver problemas de nuestros servicios
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  )
}

export default Home
