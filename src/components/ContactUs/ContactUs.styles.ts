import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import Container from 'ui/Container/Container'
import Section from 'ui/Section/Section'

export const SectionContactUs = styled(Section)`
  margin: auto;
`

export const ContactUsWrapper = styled(Container)`
  width: 100%;

  @media only screen and (min-width: ${breakpoints.sm}) {
    max-width: 43.75rem;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    max-width: 100%;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 1rem;
  gap: 1.5rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
