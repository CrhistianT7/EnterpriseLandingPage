import ContactUs from "components/ContactUs/ContactUs";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import Container from "ui/Container/Container";

const Home = () => {
  return (
    <Container size="lg">
      <Header />
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
