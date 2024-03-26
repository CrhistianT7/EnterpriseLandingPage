import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"

const StyledH1 = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.5;

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 5rem;
  }
`

const H1: React.FC = () => {
  return <StyledH1 />
}

export default H1
