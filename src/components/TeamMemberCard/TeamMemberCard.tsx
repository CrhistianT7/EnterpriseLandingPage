import styled from "styled-components"

interface ITeamMemberCard {
  name: string
  position: string
  quote?: string
  image: string
  website?: string
}

const StyledTeamMemberCard = styled.div`
  border: 1px solid red;
`

const TeamMemberCard: React.FC<ITeamMemberCard> = ({
  name,
  position,
  quote,
  image,
  website,
}) => {
  return (
    <StyledTeamMemberCard>
      <p>{image}</p>
      <h4>{name}</h4>
      <p>{position
      }</p>
      <p>{quote}</p>
      <div>link to: {website}</div>
    </StyledTeamMemberCard>
  )
}

export default TeamMemberCard
