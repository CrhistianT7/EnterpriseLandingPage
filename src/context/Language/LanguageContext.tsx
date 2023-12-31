import React, { useState } from "react";
import { createContext } from "react";
import en from "lang/en.json";
import es from "lang/es.json";
import fr from 'lang/fr.json'
import pt from 'lang/pt.json'
import { ENGLISH, ESPANOL, FRANCAIS, PORTUGUES } from "./constants";

interface LanguageDefinition {
  locale: string;
  messages: { [index: string]: string };
}

interface LangaugeContextProps {
  language: LanguageDefinition;
  handleLanguage: (value: string) => void;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageContext = createContext<LangaugeContextProps>(
  {} as LangaugeContextProps
);

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageDefinition>({
    locale: "en",
    messages: en,
  });

  const handleLanguage = (value: string) => {
    switch (value) {
      case ESPANOL:
        setLanguage({
          locale: "es",
          messages: es,
        });
        break;
      case ENGLISH:
        setLanguage({
          locale: "en",
          messages: en,
        });
        break;
      case PORTUGUES:
        setLanguage({
          locale: "pt",
          messages: pt,
        });
        break;
      case FRANCAIS:
        setLanguage({
          locale: "fr",
          messages: fr,
        });
        break;
      default:
        break;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
