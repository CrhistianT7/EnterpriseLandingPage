import { FiGithub } from 'react-icons/fi'
import { AiOutlineGlobal } from 'react-icons/ai'
import {
  ImgFounder,
  LinkFounder,
  NameFounder,
  PositionFounder,
  QuoteFounder,
  StyledTeamMemberCard,
} from './TeamMemberCard.styles'

interface ITeamMemberCard {
  name: string
  position: string
  quote: string
  image: string
  description?: string
  website_url?: string
  github_url?: string
}

const TeamMemberCard: React.FC<ITeamMemberCard> = ({
  name,
  position,
  quote,
  image,
  website_url,
  github_url,
}) => {
  return (
    <StyledTeamMemberCard>
      <ImgFounder src={image} alt="" />
      <NameFounder>{name}</NameFounder>
      <PositionFounder>{position}</PositionFounder>
      <QuoteFounder>{quote}</QuoteFounder>
      {(website_url || github_url) && (
        <LinkFounder>
          {github_url && (
            <a href={github_url} target="_blank" rel="noopener noreferrer">
              <FiGithub size={24} />
            </a>
          )}
          {website_url && (
            <a href={website_url} target="_blank" rel="noopener noreferrer">
              <AiOutlineGlobal size={24} />
            </a>
          )}
        </LinkFounder>
      )}
    </StyledTeamMemberCard>
  )
}

export default TeamMemberCard
