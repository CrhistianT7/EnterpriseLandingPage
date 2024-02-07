import { ENGLISH, ESPANOL } from './constants'

export interface ILanguagaConfiguration {
  id: string
  value: string
  name: string
}

export interface ILanguageOptions {
  [index: string]: ILanguagaConfiguration
}

export const languageOptions: ILanguagaConfiguration[] = [
  {
    id: 'en',
    value: ENGLISH,
    name: 'English',
  },
  {
    id: 'es',
    value: ESPANOL,
    name: 'Español',
  },
  // {
  //   id: 'pt',
  //   value: PORTUGUES,
  //   name: 'Português',
  // },
  // {
  //   id: "fr",
  //   value: FRANCAIS,
  //   name: "Français",
  // },
]
