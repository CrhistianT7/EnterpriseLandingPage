import Container from 'ui/Container/Container'
import { Question } from './Question/Question'
import Hero from './Hero/Hero'
import ServicesBenefit from './ServicesBenefit/ServicesBenefit'
import FinalProject, { IDeliverables } from './FinalProject/FinalProject'
import Technologies, { ITechnologiesProps } from './Technologies/Technologies'
import NavService from './NavService/NavService'

interface ICard {
  key: string
  name: string
  icon: React.ReactNode
  description: string
}

export interface IProcess {
  titleProcess: string
  descriptionProcess: string
}
export interface IServicesData {
  id: string
  name: string
  subTitle: string
  descriptionHero: string
  cardIncludes: [
    {
      title: string
      description: string
      card: Array<ICard>
    }
  ]
  questionService: string
  responseService: string
  developmentProcess: [
    {
      title: string
      description: string
      process: Array<IProcess>
    }
  ]
  finalDeliverables: Array<IDeliverables>
  technologies: Array<ITechnologiesProps>
}

const ServiceComponent: React.FC<{ serviceData: IServicesData }> = (props) => {
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
  } = props.serviceData

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
          titleFinalDeliverables={deliverable.titleFinalDeliverables}
          descriptionFinalDeliverables={
            deliverable.descriptionFinalDeliverables
          }
          deliverables={deliverable.deliverables}
        />
      ))}
      <Technologies
        titleTechnologies={technologies[0].titleTechnologies}
        descriptionTechnologies={technologies[0].descriptionTechnologies}
        tech={technologies[0].tech}
      />
    </>
  )
}

export default ServiceComponent
