import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import en from "../src/lang/en.json";
import Hero from "./components/Hero/Hero";

const App = () => {
  const [locale] = useState<string>("es");
  return (
    <IntlProvider locale={locale} messages={en}>
      <>
        <nav>navbar</nav>
        <Hero />
        <section>section 2</section>
        <section>Portafolio / clients / parterns</section>
        <section>Section 3</section>
        <section>Tutoriales o cosas así</section>
        <section>Contratar por 6 meses o un año, para dar experiencia</section>
        <section>contact us</section>
        <footer>footer</footer>
      </>
    </IntlProvider>
  );
};

export default App;
