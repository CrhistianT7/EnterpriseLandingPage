import { createContext, useEffect, useState } from 'react'
import useLocalStorage from 'hooks/useLocalStorage'
import en from 'lang/en.json'
import es from 'lang/es.json'
import fr from 'lang/fr.json'
import pt from 'lang/pt.json'
import {
  ENGLISH,
  ESPANOL,
  FRANCAIS,
  PORTUGUES,
  LANGUAGE_LOCAL_STORAGE_KEY,
} from './constants'

interface LanguageDefinition {
  locale: string
  messages: { [index: string]: string }
}

interface LangaugeContextProps {
  language: LanguageDefinition
  handleLanguage: (value: string) => void
}

interface LanguageProviderProps {
  children: React.ReactNode
}

const LanguageContext = createContext<LangaugeContextProps>(
  {} as LangaugeContextProps
)

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [storageLanguage, setStorageLanguage] = useLocalStorage<string>(
    LANGUAGE_LOCAL_STORAGE_KEY,
    'en'
  )

  const [language, setLanguage] = useState<LanguageDefinition>({
    locale: 'en',
    messages: en,
  })

  useEffect(() => {
    if (storageLanguage) {
      handleLanguage(storageLanguage)
    }
  }, [storageLanguage])

  const handleLanguage = (value: string) => {
    switch (value) {
      case ESPANOL:
        setStorageLanguage('es')
        setLanguage({
          locale: 'es',
          messages: es,
        })
        break
      case ENGLISH:
        setStorageLanguage('en')
        setLanguage({
          locale: 'en',
          messages: en,
        })
        break
      case PORTUGUES:
        setStorageLanguage('pt')
        setLanguage({
          locale: 'pt',
          messages: pt,
        })
        break
      case FRANCAIS:
        setStorageLanguage('fr')
        setLanguage({
          locale: 'fr',
          messages: fr,
        })
        break
      default:
        break
    }
  }

  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageContext, LanguageProvider }
