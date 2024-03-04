import styled from 'styled-components'
import { colors } from 'styles/colors'
import Container from 'ui/Container/Container'
import Section from 'ui/Section/Section'

export const ContainerFaq = styled(Container)`
  width: 100%;
  gap: 3rem;
`
export const FaqSectionWrapper = styled(Section)`
  margin: auto;
`

export const FaqTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.gray[50]};
  font-size: clamp(1.5rem, 5vw, 3rem);
  margin: 3.125rem 0rem 1.5rem;
  background: ${colors.secondary.main};
  width: 100%;
  height: 12.125rem;
  border-radius: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 4.5rem;
  padding: 0.625rem;
`
export const SectionFaq = styled(Container)`
  width: 100%;
  gap: 1rem;
`
