import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'
import Section from 'ui/Section/Section'

export const InformationContainer = styled(Section)`
  display: flex;
  margin: 1.875rem 0 4.375rem;
  width: 90%;
  height: 100%;
  gap: 1.25rem;
  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
  }
`
