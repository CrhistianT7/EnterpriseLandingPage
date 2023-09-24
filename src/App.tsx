import React, { useState } from "react";

import { IntlProvider } from "react-intl";
import en from "../src/lang/en.json";
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
        <section>Font Family Poppins</section>
        <section>section 2</section>
        <section id="portafolio" style={{ height: "100vh" }}>
          Portafolio / clients / parterns
        </section>
        <section>Section 3</section>
        <section>Tutoriales o cosas así</section>
        <section>Contratar por 6 meses o un año, para dar experiencia</section>
        <section>contact us</section>
        <section>
          mapa de mundo donde se vea lo que pasaba al mismo tiempo
        </section>
        <section>
          - cual es nuestro valor, que necesidad del consumidor estamos tratando
          de resolver? - Diferenciación, que nos hace diferentes del resto? -
          buen servicio post venta - atención al cliente con humanos, no con
          bots - seguimiento adecuado
        </section>
        <footer>footer</footer>
      </IntlProvider>
    </>
  );
};

export default App;
