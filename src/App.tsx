import { IntlProvider } from 'react-intl'
import { GlobalStyle } from './styles/global'
import { useLanguageContext } from 'context/Language/useLanguageContext'

import AppRouter from 'routes/AppRouter'

const App = () => {
  const { language } = useLanguageContext()
  return (
    <>
      <GlobalStyle />
      <IntlProvider locale={language.locale} messages={language.messages}>
        <AppRouter />
      </IntlProvider>
    </>
  )
}

export default App
