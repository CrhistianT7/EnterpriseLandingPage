import Home from "pages/Home/Home";

import { IntlProvider } from "react-intl";
import { GlobalStyle } from "./styles/global";
import { useLanguageContext } from "context/Language/useLanguageContext";
import Input from "ui/input/Input";

const App = () => {
  const { language } = useLanguageContext();
  return (
    <>
      <GlobalStyle />
      <IntlProvider locale={language.locale} messages={language.messages}>
        <Home />
        <Hero />
        <section>section 2</section>
        <section id="portafolio" style={{ height: "100vh" }}>
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
          <Input id="one" value="something"/>
          <div>nombre de compañia mas logo - redes sociales</div>
        </footer>
      </IntlProvider>
    </>
  );
};

export default App;
