import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { IH5Props } from "types/ui/Titles"

const StyledH5 = styled.h4<IH5Props>`
  font-weight: ${(props) => props.weight};
  font-size: 1rem;
  line-height: 1.5;

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 1.125rem;
  }
`

const H5: React.FC<IH5Props> = (props) => {
  return <StyledH5 {...props} />
}

export default H5
