import ServiceComponent from 'components/ServiceSeo/ServiceComponent'
// import { ICardIncludes } from 'components/ServiceSeo/ServicesBenefit/ServicesBenefit'
import { IDeliverables } from 'components/ServiceSeo/FinalProject/FinalProject'
import { IProcess } from 'components/ServiceSeo/ServiceComponent'
import { ITechnologiesProps } from 'components/ServiceSeo/Technologies/Technologies'
import { servicesInfo } from 'data/services'
import { useState, useEffect } from 'react'

interface ICard {
  key: string
  name: string
  icon: React.ReactNode
  description: string
}

interface IServiceRouter {
  serviceId: string
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

const ServiceTemplate: React.FC<IServiceRouter> = ({ serviceId }) => {
  const [serviceData, setServiceData] = useState<IServicesData | null>(null)

  useEffect(() => {
    const data = servicesInfo.filter((service) => service.id === serviceId)[0]
    if (data) {
      setServiceData(data)
    } else {
      console.error(`No se encontraron datos para serviceId: ${serviceId}`)
    }
  }, [])

  return serviceData ? <ServiceComponent serviceData={serviceData} /> : null
}

export default ServiceTemplate
