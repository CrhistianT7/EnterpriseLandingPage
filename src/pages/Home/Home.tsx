import ContactUs from "components/ContactUs/ContactUs";
import Navbar from "components/Navbar/Navbar";
import Hero from "components/Hero/Hero";
import Container from "ui/Container/Container";

const Home = () => {
  return (
    <Container size="lg">
      <Navbar />
      <Hero />
      <section id="portafolio" style={{ height: "100vh" }}>
        <h3>Portafolio</h3>
        Portafolio / clients / parterns
      </section>
      <section>
        <h3>Services</h3>
        <div>
          - Capataciónes de phising, navegación sobre internet - Web development
          - E-commerce - Realidad aumentada - //lentes de facebook - Ikea //
          Realidad Virtual - App development - SEO - Marketing Digital -
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
      <section>
        <ContactUs />
      </section>
      <footer>
        <h3>Footer</h3>
        <div>
          -hours of operation -general info: email, phone number, ubicación
        </div>
        <div>nombre de compañia mas logo - redes sociales</div>
      </footer>
    </Container>
  );
};

export default Home;
