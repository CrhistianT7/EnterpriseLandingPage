import { IntlProvider } from 'react-intl'
import { GlobalStyle } from './styles/global'
import { useLanguageContext } from 'context/Language/useLanguageContext'
import { Routes, Route } from 'react-router-dom'

import Home from 'pages/Home/Home'
import AboutUs from 'pages/AboutUs/AboutUs'
import PageNotFound from 'pages/PageNotFound/PageNotFound'

const App = () => {
  const { language } = useLanguageContext()
  return (
    <>
      <GlobalStyle />
      <IntlProvider locale={language.locale} messages={language.messages}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </IntlProvider>
    </>
  )
}

export default App
