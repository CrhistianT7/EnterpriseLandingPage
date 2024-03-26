import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { IH4Props } from "types/ui/Titles"

const StyledH4 = styled.h4<IH4Props>`
  font-weight: ${(props) => props.weight};
  font-size: 1.125rem;
  line-height: 1.5;

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 1.5rem;
  }
`

const H4: React.FC<IH4Props> = (props) => {
  return <StyledH4 {...props} />
}

export default H4
