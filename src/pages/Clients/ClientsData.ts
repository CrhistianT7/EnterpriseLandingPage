import hero from './../../assets/images/ClientsPage/mockup-ui-chat.webp'
import avatarImg from './../../assets/images/ClientsPage/3d-rendering-avatar-concept.webp'
import codeImg from './../../assets/images/ClientsPage/mockup-code.webp'
import githubBrand from './../../assets/images/ClientsPage/github-brand.svg'
import dribleBrand from './../../assets/images/ClientsPage/drible-brand.svg'

interface IClientCard {
  id: string
  image: string
  name: string
  description: string
  to: string
}

interface Brand {
  id: string
  src: string
  name: string
}
export const clientBrands: Brand[] = [
  { id: '1', src: githubBrand, name: 'github' },
  { id: '2', src: dribleBrand, name: 'drible' },
  { id: '3', src: githubBrand, name: 'github' },
  { id: '4', src: dribleBrand, name: 'drible' },
  { id: '5', src: githubBrand, name: 'github' },
]

export const clientData: IClientCard[] = [
  {
    id: '1',
    image: codeImg,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '2',
    image: avatarImg,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '3',
    image: hero,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '4',
    image: codeImg,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '5',
    image: avatarImg,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '6',
    image: hero,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '7',
    image: codeImg,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '8',
    image: avatarImg,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '9',
    image: hero,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '10',
    image: hero,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '11',
    image: codeImg,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '12',
    image: avatarImg,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '13',
    image: hero,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '14',
    image: codeImg,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '15',
    image: hero,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '16',
    image: hero,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '17',
    image: codeImg,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
  {
    id: '18',
    image: hero,
    name: 'Nombre del cliente',
    description:
      'Si disputa al la interes miradas ya decirte. Ch el capital casaron gozaban plateas se',
    to: 'https://www.google.com',
  },
]
