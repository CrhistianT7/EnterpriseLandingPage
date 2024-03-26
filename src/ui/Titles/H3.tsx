import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { IH3Props } from "types/ui/Titles"

const StyledH3 = styled.h3<IH3Props>`
  font-weight: ${(props) => props.weight};
  font-size: 1.5rem;
  line-height: 1.5;

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 2rem;
  }
`

const H3: React.FC<IH3Props> = (props) => {
  return <StyledH3 {...props} />
}

export default H3
