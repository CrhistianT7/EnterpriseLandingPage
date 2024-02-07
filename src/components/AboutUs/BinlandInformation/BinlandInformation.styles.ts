import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import Section from 'ui/Section/Section'

export const InformationContainer = styled(Section)`
  display: flex;
  height: 100%;
  gap: 1.25rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
  }
`
