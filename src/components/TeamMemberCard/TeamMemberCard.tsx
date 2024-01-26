import styled from "styled-components"

interface ITeamMemberCard {
  name: string
  position: string
  quote?: string
  image: string
  website_url?: string
}

const StyledTeamMemberCard = styled.div`
  border: 1px solid red;
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
      <p>{image}</p>
      <h4>{name}</h4>
      <p>{position
      }</p>
      <p>{quote}</p>
      <div>link to: {website_url}</div>
    </StyledTeamMemberCard>
  )
}

export default TeamMemberCard
