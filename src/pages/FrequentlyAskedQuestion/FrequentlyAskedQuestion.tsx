import useIntlMessages from 'hooks/useIntlMessages'

import FaqCard from 'components/FaqCard/FaqCard'
import StillHaveQuestion from 'components/StillHaveQuestion/StillHaveQuestion'
import {
  ContainerFaq,
  FaqSectionWrapper,
  FaqTitle,
  SectionFaq,
} from './FrequentlyAskedQuestion.style'

const FrequenltyAskedQuestion = () => {
  const intl = useIntlMessages()

  const questions = [
    {
      id: 1,
      question: '¿Qué servicios de desarrollo ofrece su empresa?',
      answer:
        ' Nuestra empresa ofrece una amplia gama de servicios de desarrollo, incluyendo desarrollo de software a medida, aplicaciones móviles, desarrollo web, consultoría tecnológica y más.',
    },
    {
      id: 2,
      question:
        '¿Cuál es el proceso de trabajo de su empresa en el desarrollo de software?',
      answer:
        'Nuestro proceso de desarrollo de software sigue una metodología colaborativa y transparente. Comenzamos con un análisis detallado de los requisitos, seguido de la planificación, diseño, desarrollo, pruebas y finalmente, la implementación.',
    },
    {
      id: 3,
      question: '¿Cuánto tiempo lleva desarrollar un proyecto típico?',
      answer:
        ' La duración de un proyecto varía según su complejidad y alcance. Proyectos más simples pueden completarse en semanas, mientras que proyectos más grandes pueden llevar varios meses.',
    },
    {
      id: 4,
      question:
        '¿Cómo garantizan la seguridad y la confidencialidad de los datos del cliente durante el desarrollo?',
      answer:
        ' La seguridad y confidencialidad de los datos de nuestros clientes son nuestras prioridades. Implementamos prácticas de seguridad de última generación, como encriptación de datos, acceso restringido y auditorías regulares. ',
    },
  ]

  return (
    <FaqSectionWrapper type="padding" size="lg">
      <ContainerFaq size="xl">
        <FaqTitle>{intl('frequently.asked.questions.title')}</FaqTitle>
        <SectionFaq size="sm">
          {questions.map((question) => {
            return (
              <FaqCard
                key={question.id}
                question={question.question}
                answer={question.answer}
              />
            )
          })}
          <StillHaveQuestion />
        </SectionFaq>
      </ContainerFaq>
    </FaqSectionWrapper>
  )
}

export default FrequenltyAskedQuestion
