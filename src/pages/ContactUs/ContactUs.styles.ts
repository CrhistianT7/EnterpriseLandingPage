import styled from 'styled-components'
import { breakpoints } from 'shared/breakpoints'
import leafBackground from './../../assets/images/backgrounds/leaf-background.jpg'
import Container from 'ui/Container/Container'

export const ContactUsHero = styled.div`
  width: 100%;
  background-image: url(${leafBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-bottom-right-radius: 50px;
  height: 300px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${breakpoints.sm}) {
    height: 350px;
  }
`

export const HeroWrapper = styled(Container)`
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`

export const HeroContentWrapper = styled.div`
  color: white;
  max-width: 600px;
  padding-left: 3rem;
  border-left: 5px solid white;
  font-size: 1.5rem;
  line-height: 1.25;
  font-weight: 400;
  @media only screen and (max-width: ${breakpoints.sm}) {
    font-size: 0.5rem;
    padding-left: 1.2rem;
  }
`

export const HeroTitle = styled.h2`
  font-size: 2.5rem;
  text-shadow: 0px 8px 12px rgba(38, 36, 41, 0.25);
  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 2rem;
  }
`
export const HeroDescription = styled.p`
  text-shadow: 0px 4px 10px rgba(38, 36, 41, 0.25);
  font-size: 24px;
  line-height: 32px;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`
export const CommunicationWrapper = styled(Container)`
  width: 100%;
  gap: 20px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${breakpoints.xs}, 1fr));
  align-items: stretch;
`

export const ContactOptionsWrapper = styled.div`
  background-color: #eceaea;
  width: 100%;
  background-image: url();
  border-radius: 1rem;
`
