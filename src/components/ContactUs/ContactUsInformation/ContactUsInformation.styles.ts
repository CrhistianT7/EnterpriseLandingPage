import styled from 'styled-components'
import { colors } from 'styles/colors'

import { breakpoints } from 'shared/breakpoints'

export const ContentContactUsInformation = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  background-color: ${colors.secondary.main};
  border-radius: 1rem;
  justify-content: space-evenly;
  padding: 1rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 40%;
    padding: 4rem;
  }
`
