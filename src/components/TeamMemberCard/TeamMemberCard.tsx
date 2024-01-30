import styled from 'styled-components'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineGlobal } from 'react-icons/ai'

interface ITeamMemberCard {
  name: string
  position: string
  quote: string
  image: string
  description?: string
  website_url?: string
}

const StyledTeamMemberCard = styled.div`
  border: 1px solid red;
`
const ImgFounder = styled.img`
  width: 170px;
  height: 170px;
`
const NameFounder = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`
const PositionFounder = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #f83d48;
`
const QuoteFounder = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #424242;
`
const LinkFounder = styled.div`
  /* display: flex;
  width: 19.5px;
  height: 20.03px;
*/
`

const TeamMemberCard: React.FC<ITeamMemberCard> = ({
  name,
  position,
  quote,
  image,
  website_url,
}) => {
  return (
    <StyledTeamMemberCard>
      <ImgFounder src={image} alt="" />
      <NameFounder>{name}</NameFounder>
      <PositionFounder>{position}</PositionFounder>
      <QuoteFounder>{quote}</QuoteFounder>
      <LinkFounder>
        link to: {website_url}
        <FiGithub />
        <AiOutlineGlobal />
      </LinkFounder>
    </StyledTeamMemberCard>
  )
}

export default TeamMemberCard
