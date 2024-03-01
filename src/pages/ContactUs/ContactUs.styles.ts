import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import backgroundContact from './../../assets/images/imgContactUs/background-contact-us.svg'
import Container from 'ui/Container/Container'
import SectionTitle from 'components/SectionTitle/SectionTitle'

export const ContactUsHero = styled.div`
  width: 100%;
  background-image: url(${backgroundContact});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 21.875rem;
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${breakpoints.lg}) {
    height: 27.687rem;
  }
`

export const HeroWrapper = styled(Container)`
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`

export const Title = styled(SectionTitle)`
  color: white;
  font-weight: 600;
  font-size: clamp(2rem, 8vw, 5rem);
  line-height: 7.5rem;
  text-transform: uppercase;
`
