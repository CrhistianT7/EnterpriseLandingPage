import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"

const StyledH2 = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.5;

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 3.375rem;
  }
`

const H2: React.FC = () => {
  return <StyledH2 />
}

export default H2
