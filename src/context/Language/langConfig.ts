import { ENGLISH, ESPANOL, FRANCAIS, PORTUGUES } from "./constants";

interface ILanguagaConfiguration {
  value: string;
  name: string;
}

interface ILanguageOptions {
  [index: string]: ILanguagaConfiguration;
}

export const languageOptions: ILanguageOptions = {
  en: {
    value: ENGLISH,
    name: "English",
  },
  es: {
    value: ESPANOL,
    name: "Español",
  },
  pt: {
    value: PORTUGUES,
    name: "Português",
  },
  fr: {
    value: FRANCAIS,
    name: "Français",
  },
};
