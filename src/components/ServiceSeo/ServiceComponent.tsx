import Container from 'ui/Container/Container'
import { Question } from './Question/Question'
import Hero from './Hero/Hero'
import ServicesBenefit from './ServicesBenefit/ServicesBenefit'
import FinalProject from './FinalProject/FinalProject'
import Technologies from './Technologies/Technologies'
import NavService from './NavService/NavService'

interface IServicesData {
  id: string
  name: string
  subTitle: string
  descriptionHero: string
  cardIncludes: [
    {
      title: string
      description: string
      card: [
        {
          key: string
          name: string
          icon: React.ReactNode
          description: string
        }
      ]
    }
  ]
  questionService: string
  responseService: string
  developmentProcess: [
    {
      title: string
      description: string
      process: []
    }
  ]
  finalDeliverables: [
    {
      title: string
      description: string
      deliverables: []
    }
  ]
  technologies: [
    {
      techTitle: string
      techDescription: string
      img: []
    }
  ]
}

const ServiceComponent: React.FC<IServicesData> = (serviceData) => {
  const {
    id,
    name,
    subTitle,
    descriptionHero,
    cardIncludes,
    questionService,
    responseService,
    developmentProcess,
    finalDeliverables,
    technologies,
  } = serviceData

  return (
    <>
      <Hero
        id={id}
        serviceName={name}
        serviceSubTitle={subTitle}
        serviceDescription={descriptionHero}
      />
      <Container size="xl">
        {cardIncludes.map((cardIncludes, index) => (
          <ServicesBenefit
            key={index}
            titleBenefit={cardIncludes.title}
            description={cardIncludes.description}
            card={cardIncludes.card}
          />
        ))}
        <Question
          questionService={questionService}
          responseService={responseService}
        />

        {developmentProcess.map((developmentProcess) => (
          <NavService
            titleProcess={developmentProcess.title}
            descriptionProcess={developmentProcess.description}
            tabs={developmentProcess.process}
          />
        ))}
      </Container>
      {finalDeliverables.map((deliverable, index) => (
        <FinalProject
          key={index}
          title={deliverable.title}
          description={deliverable.description}
          deliverable={deliverable.deliverables}
        />
      ))}
      <Technologies
        techTitle={technologies[0].techTitle}
        techDescription={technologies[0].techDescription}
        img={technologies[0].img}
      />
    </>
  )
}

export default ServiceComponent
