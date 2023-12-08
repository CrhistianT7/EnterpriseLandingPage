import Home from "pages/Home/Home";

import { IntlProvider } from "react-intl";
import { GlobalStyle } from "./styles/global";
import { useLanguageContext } from "context/Language/useLanguageContext";

const App = () => {
  const { language } = useLanguageContext();
  return (
    <>
      <GlobalStyle />
      <IntlProvider locale={language.locale} messages={language.messages}>
        <Home />
      </IntlProvider>
    </>
  );
};

export default App;
