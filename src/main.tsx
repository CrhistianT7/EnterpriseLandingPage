import { LanguageProvider } from 'context/Language/LanguageContext'
import * as React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { client } from 'prismicio/prismicio'
import { PrismicProvider } from '@prismicio/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrismicProvider client={client}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </PrismicProvider>
    </BrowserRouter>
  </React.StrictMode>
)
