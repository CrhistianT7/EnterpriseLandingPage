import { Link } from 'react-router-dom'

import { CardWrapper, ExternalLink } from './ClientCard.styles'

interface IClientCard {
  id: string
  image: string
  name: string
  description: string
  to: string
}

const ClientCard: React.FC<IClientCard> = ({
  id,
  image,
  name,
  description,
  to,
}) => {
  return (
    <CardWrapper key={id}>
      <div className="img-wrapper">
        <img src={image} className="img-card" />
        <Link to={`${to}`} className="external-link" target="_BLANK">
          <ExternalLink size={40} />
        </Link>
      </div>
      <h3 className="client-name">{name}</h3>
      <p className="client-description">{description}</p>
    </CardWrapper>
  )
}

export default ClientCard
