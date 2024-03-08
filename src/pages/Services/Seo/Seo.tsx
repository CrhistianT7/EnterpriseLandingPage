import ServiceComponent from 'components/ServiceSeo/ServiceComponent'
import { servicesInfo } from 'data/services'
import { useState, useEffect } from 'react'
interface IServiceRouter {
  serviceId: string
}

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

const ServiceTemplate: React.FC<IServiceRouter> = ({ serviceId }) => {
  const [serviceData, setServiceData] = useState<IServicesData>()

  useEffect(() => {
    const data = servicesInfo.filter((service) => service.id === serviceId)[0]
    console.log('holaa ', data)
    setServiceData(data)
  }, [])

  console.log(serviceData)
  console.log(serviceId)
  // return <ServiceComponent serviceData={serviceData} />
  return <>hola</>
}

export default ServiceTemplate
