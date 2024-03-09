import {
  WrapperDescription,
  WrapperService,
  WrapperTitle,
} from './ServicesBenefit.styles'

export interface IService {
  key: string
  name: string
  icon: React.ReactNode
  description?: string
}

export interface ICardIncludes {
  titleBenefit: string
  description: string
  card: IService[]
}

const ServicesBenefit: React.FC<ICardIncludes> = ({
  titleBenefit,
  description,
  card,
}) => {
  return (
    <WrapperService size="lg" type="margin">
      <WrapperTitle>
        <h2 className="service-title-question">{titleBenefit}</h2>
        <p className="service-title-response">{description}</p>
      </WrapperTitle>
      <WrapperDescription>
        {card.map((element, index) => (
          <div key={index} className="wrapper-description-info">
            <div className="wrapper-description-title">
              <span className="wrapper-title-icon">{element.icon}</span>
              <h3 className="wrapper-title">{element.name}</h3>
            </div>
            <p className="content-description-info-p">{element.description}</p>
          </div>
        ))}
      </WrapperDescription>
    </WrapperService>
  )
}

export default ServicesBenefit
