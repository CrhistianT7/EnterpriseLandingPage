import { useParams } from "react-router-dom"

const ServiceTemplate: React.FC = () => {
  const { serviceId } = useParams()
  console.log(serviceId)

  return (<>
    <>ServiceHero</>
    <>Features</>
    <>WhyService</>
    <>DevelopmentProcess</>
    <>Deliverables</>
    <>TechStack</>
  </>)
}

export default ServiceTemplate
