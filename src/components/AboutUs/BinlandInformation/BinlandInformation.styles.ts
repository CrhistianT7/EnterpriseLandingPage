import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import Section from 'ui/Section/Section'

export const InformationContainer = styled(Section)`
  display: flex;
  align-items: flex-start;
  height: 100%;
  gap: 1.5rem;
  width: 100%;
  margin: 0;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    margin-top: 9rem;
    gap: 3.125rem;
  }
`
