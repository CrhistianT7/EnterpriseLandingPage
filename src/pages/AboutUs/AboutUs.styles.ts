import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'

export const MembersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`
