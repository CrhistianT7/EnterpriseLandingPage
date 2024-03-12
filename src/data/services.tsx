import javascript from 'assets/images/imgTechnologies/Javascript.svg'
import python from 'assets/images/imgTechnologies/Python.svg'
import reactjs from 'assets/images/imgTechnologies/Reactjs.svg'
import figma from 'assets/images/imgTechnologies/Figma.svg'
import nodejs from 'assets/images/imgTechnologies/NodeJs.svg'
// import { BsCheck } from 'react-icons/bs'
import { FaLink } from 'react-icons/fa'
import { IServicesData } from 'components/ServiceSeo/ServiceComponent'

export const servicesInfo: Array<IServicesData> = [
  {
    id: 'seo',
    name: 'Seo',
    subTitle: 'El posicionamiento es importantexxxx',
    descriptionHero:
      'Un texto bien cool para describir el servicio de manera clara y corta para que el cliente entienda, quizás  2 lineas o 3 son duficientes.',
    cardIncludes: [
      {
        title: '¿Qué incluye?',
        description:
          'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. ',
        card: [
          {
            key: '1',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
          {
            key: '2',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
          {
            key: '3',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
          {
            key: '4',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
          {
            key: '5',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
          {
            key: '6',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
          {
            key: '7',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
          {
            key: '8',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
        ],
      },
    ],

    questionService: '¿Por qué ?',
    responseService:
      'Pueblo lengua mar franca con bronce tienes una. La sala al el mano eran sr unos. Juzgado picante te aureola lo dificil oh holgada. La tentandole la excelentes mamarracho confidente. Tierno ahi piedra formas molino tan pan tio. Aun clasicismo habilitado sin hoy tan pretension despertado.',
    developmentProcess: [
      {
        title: '¿Cuál es nuestro proceso de desarrollo?',
        description:
          'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera.',

        process: [
          {
            // inplementar key
            titleProcess: 'Diseño de wireframes',
            descriptionProcess:
              'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron. ',
          },
          {
            titleProcess: 'Diseño de wireframes',
            descriptionProcess:
              'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron. ',
          },
          {
            titleProcess: 'Diseño de wireframes',
            descriptionProcess:
              'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron. ',
          },
          {
            titleProcess: 'Diseño de wireframes',
            descriptionProcess:
              'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron. ',
          },
        ],
      },
    ],
    finalDeliverables: [
      {
        titleFinalDeliverables: '¿Los entregables a final del proyecto?',
        descriptionFinalDeliverables:
          'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. ',
        deliverables: [
          { id: '1', name: 'App web' },
          { id: '2', name: 'Codigo' },
          { id: '3', name: 'App Web' },
          { id: '4', name: 'Base de datos' },
          { id: '5', name: 'Material Grafico' },
          { id: '6', name: 'Base de datos' },
        ],
      },
    ],
    technologies: [
      {
        titleTechnologies: 'Tecnologías que manejamos.',
        descriptionTechnologies:
          'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. ',
        tech: [
          {
            // si me sale error le inplemento una key
            image: javascript,
          },
          {
            image: python,
          },
          {
            image: reactjs,
          },
          {
            image: nodejs,
          },
          {
            image: figma,
          },
        ],
      },
    ],
  },
  {
    id: 'design',
    name: 'design',
    subTitle: 'El posicionamiento es importante Design',
    descriptionHero:
      'Un texto bien cool para describir el servicio de manera clara y corta para que el cliente entienda, quizás  2 lineas o 3 son duficientes.',
    cardIncludes: [
      {
        title: '¿Qué incluye en Design?',
        description:
          'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera.  ',
        card: [
          {
            key: '1',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
          {
            key: '2',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
          {
            key: '3',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
          {
            key: '4',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
        ],
      },
    ],
    questionService: '¿Por qué SEO?',
    responseService:
      'Pueblo lengua mar franca con bronce tienes una. La sala al el mano eran sr unos. Juzgado picante te aureola lo dificil oh holgada. La tentandole la excelentes mamarracho confidente. Tierno ahi piedra formas molino tan pan tio. Aun clasicismo habilitado sin hoy tan pretension despertado.',
    developmentProcess: [
      {
        title: '¿Cuál es nuestro proceso de desarrollo?',
        description:
          'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera.',

        process: [
          {
            titleProcess: 'Diseño de wireframes',
            descriptionProcess:
              'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron. ',
          },
          {
            titleProcess: 'Diseño de wireframes',
            descriptionProcess:
              'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron. ',
          },
          {
            titleProcess: 'Diseño de wireframes',
            descriptionProcess:
              'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron. ',
          },
          {
            titleProcess: 'Diseño de wireframes',
            descriptionProcess:
              'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron. ',
          },
        ],
      },
    ],
    finalDeliverables: [
      {
        titleFinalDeliverables: '¿Los entregables a final del proyecto?',
        descriptionFinalDeliverables:
          'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. ',
        deliverables: [
          { id: '1', name: 'App web' },
          { id: '2', name: 'Codigo' },
          { id: '3', name: 'App Web' },
          { id: '4', name: 'Base de datos' },
        ],
      },
    ],
    technologies: [
      {
        titleTechnologies: 'Tecnologías que manejamos.',
        descriptionTechnologies:
          'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. ',
        tech: [
          {
            image: javascript,
          },
          {
            image: python,
          },
          {
            image: reactjs,
          },
        ],
      },
    ],
  },
  {
    id: 'marketing',
    name: 'marketing',
    subTitle: 'El posicionamiento es importante Marketing',
    descriptionHero:
      'Un texto bien cool para describir el servicio de manera clara y corta para que el cliente entienda, quizás  2 lineas o 3 son duficientes.',
    cardIncludes: [
      {
        title: '¿Que Incluye en Marketing?',
        description:
          'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera.  ',
        card: [
          {
            key: '1',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
          {
            key: '1',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
          {
            key: '1',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
        ],
      },
    ],
    questionService: '¿Por qué SEO?',
    responseService:
      'Pueblo lengua mar franca con bronce tienes una. La sala al el mano eran sr unos. Juzgado picante te aureola lo dificil oh holgada. La tentandole la excelentes mamarracho confidente. Tierno ahi piedra formas molino tan pan tio. Aun clasicismo habilitado sin hoy tan pretension despertado.',
    developmentProcess: [
      {
        title: '¿Cuál es nuestro proceso de desarrollo?',
        description:
          'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera.',

        process: [
          {
            titleProcess: 'Diseño de wireframes',
            descriptionProcess:
              'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron. ',
          },
          {
            titleProcess: 'Diseño de wireframes',
            descriptionProcess:
              'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron. ',
          },
          {
            titleProcess: 'Diseño de wireframes',
            descriptionProcess:
              'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron. ',
          },
          {
            titleProcess: 'Diseño de wireframes',
            descriptionProcess:
              'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron. ',
          },
        ],
      },
    ],
    finalDeliverables: [
      {
        titleFinalDeliverables: '¿Los entregables a final del proyecto?',
        descriptionFinalDeliverables:
          'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. ',
        deliverables: [
          { id: '1', name: 'App web' },
          { id: '2', name: 'Codigo' },
          { id: '3', name: 'App Web' },
          { id: '4', name: 'Base de datos' },
          { id: '5', name: 'Material Grafico' },
        ],
      },
    ],
    technologies: [
      {
        titleTechnologies: 'Tecnologías que manejamos.',
        descriptionTechnologies:
          'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. ',
        tech: [
          {
            image: figma,
          },
        ],
      },
    ],
  },
  {
    id: 'app-development',
    name: 'app development',
    subTitle: 'El posicionamiento es importante',
    descriptionHero:
      'Un texto bien cool para describir el servicio de manera clara y corta para que el cliente entienda, quizás  2 lineas o 3 son duficientes.',
    cardIncludes: [
      {
        title: '¿Que incluye en App?',
        description:
          'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. ',
        card: [
          {
            key: '1',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
          {
            key: '2',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
          {
            key: '3',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
          {
            key: '4',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
          {
            key: '5',
            name: 'Backlink',
            icon: <FaLink size={24} />,
            description:
              'loremProximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. To',
          },
        ],
      },
    ],

    // imagen inplementar
    questionService: '¿Por qué SEO?',
    responseService:
      'Pueblo lengua mar franca con bronce tienes una. La sala al el mano eran sr unos. Juzgado picante te aureola lo dificil oh holgada. La tentandole la excelentes mamarracho confidente. Tierno ahi piedra formas molino tan pan tio. Aun clasicismo habilitado sin hoy tan pretension despertado.',
    developmentProcess: [
      {
        title: '¿Cuál es nuestro proceso de desarrollo?',
        description:
          'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera.',

        process: [
          {
            // inplementar key
            titleProcess: 'Diseño de wireframes',
            descriptionProcess:
              'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron. ',
          },
          {
            titleProcess: 'Diseño de wireframes',
            descriptionProcess:
              'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron. ',
          },
          {
            titleProcess: 'Diseño de wireframes',
            descriptionProcess:
              'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron. ',
          },
          {
            titleProcess: 'Diseño de wireframes',
            descriptionProcess:
              'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron. ',
          },
        ],
      },
    ],
    finalDeliverables: [
      {
        titleFinalDeliverables: '¿Los entregables a final del proyecto?',
        descriptionFinalDeliverables:
          'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. ',
        deliverables: [
          { id: '1', name: 'App web' },
          { id: '2', name: 'Codigo' },
          { id: '3', name: 'App Web' },
          { id: '4', name: 'Base de datos' },
          { id: '5', name: 'Material Grafico' },
          { id: '6', name: 'Base de datos' },
        ],
      },
    ],
    technologies: [
      {
        titleTechnologies: 'Tecnologías que manejamos.',
        descriptionTechnologies:
          'Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. ',
        tech: [
          {
            image: javascript,
          },
          {
            image: python,
          },
          {
            image: reactjs,
          },
          {
            image: nodejs,
          },
          {
            image: figma,
          },
        ],
      },
    ],
  },
]
