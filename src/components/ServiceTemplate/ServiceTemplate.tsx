import Features from 'components/ServiceSeo/Features/Features'
import WhyService from 'components/ServiceSeo/WhyService/WhyService'
import ServiceHero from 'components/ServiceSeo/ServiceHero/ServiceHero'
import { useParams } from 'react-router-dom'
import DevelopmentProcess from 'components/ServiceSeo/DevelopmentProcess/DevelopmentProcess'
import Deliverables from 'components/ServiceSeo/Deliverables/Deliverables'
import TechStack from 'components/ServiceSeo/TechStack/TechStack'
import Container from 'ui/Container/Container'
import { useEffect, useState } from 'react'
import { IService } from 'types/components/service'
import { servicesInfo } from 'data/services'

const ServiceTemplate: React.FC = () => {
  const { serviceId } = useParams()

  const [serviceData, setServiceData] = useState<IService>({} as IService)

  useEffect(() => {
    const data = servicesInfo.find((service) => service.id === serviceId)
    if (data) {
      setServiceData(data)
    } else {
      console.error(`No se encontraron datos para serviceId: ${serviceId}`)
    }
  }, [serviceId])

  return (
    <>
      <ServiceHero
        id={serviceData.id}
        name={serviceData.name}
        description={serviceData.description}
        phraseQuote={serviceData.phraseQuote}
      />
      <Container size="xl">
        <Features features={serviceData.features} />
        {serviceData.whyService && (
          <WhyService
            question={serviceData.whyService.question}
            answer={serviceData.whyService.answer}
            image={serviceData.whyService.image}
          />
        )}
        {serviceData.developmentProcess && (
          <DevelopmentProcess
            question={serviceData.developmentProcess.question}
            description={serviceData.developmentProcess.description}
            steps={serviceData.developmentProcess.steps}
          />
        )}
      </Container>
      {serviceData.deliverables && (
        <Deliverables
          question={serviceData.deliverables.question}
          description={serviceData.deliverables.description}
          items={serviceData.deliverables.items}
        />
      )}
      {serviceData.techStack && (
        <TechStack
          title={serviceData.techStack.title}
          description={serviceData.techStack.description}
          image={serviceData.techStack.image}
        />
      )}
    </>
  )
}

export default ServiceTemplate
