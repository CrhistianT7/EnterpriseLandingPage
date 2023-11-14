import React, { useState } from "react";

import { IntlProvider } from "react-intl";
import en from "../src/lang/en.json";
import ContactUs from "./components/ContactUs/ContactUs";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyle } from "./styles/global";


const App = () => {
  const [locale] = useState<string>("en");
  return (
    <>
      <GlobalStyle />
      <IntlProvider locale={locale} messages={en}>
        <Navbar />
        <Hero />
        <section>section 2</section>
        <section id="portafolio" style={{ height: "100vh" }}>
          <h3>Portafolio</h3>
          Portafolio / clients / parterns
        </section>
        <section>
          <h3>Services</h3>
          <div>
            - Capataciónes de phising, navegación sobre internet
            - Web development
            - E-commerce
            - Realidad aumentada - //lentes de facebook - Ikea // Realidad Virtual
            - App development 
            - SEO
            - Marketing Digital
            - Branding - Diseñador
            - Migraciones a la nube - Cloud computing en general
            - Diseño UX/UI
            * Description abajo con nab algo
          </div>
        </section>
        <section>
          <ContactUs />
        </section>
        <footer>
          <h3>Footer</h3>
          <div>
            -hours of operation
            -general info: email, phone number, ubicación
          </div>
          <div>
            nombre de compañia mas logo - redes sociales
          </div>
        </footer>
      </IntlProvider>
    </>
  );
};

export default App;
