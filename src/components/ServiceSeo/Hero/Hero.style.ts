import styled from 'styled-components'

import imgSeo from '../../../assets/images/imgSeo/img-seo.svg'
import { breakpoints } from 'shared/breakpoints'

export const BackgroundSeo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${imgSeo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  display: flex;
  align-items: center;

  @media only screen and (min-width: ${breakpoints.lg}) {
    justify-content: start;
    background-position: -0.625rem -6.5rem;
  }
`

export const ContentHero = styled.div`
  width: 19.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 1.5rem;
  gap: 3rem;
  margin-top: 5.9375rem;
  margin-bottom: 2.5rem;
  background: rgba(45, 45, 45, 0.5);
  backdrop-filter: blur(0.312rem);
  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 44.437rem;
    height: 25.937rem;
    margin-left: 3rem;
  }

  .hero-sub-title {
    font-weight: 500;
    font-size: clamp(1.125rem, 4vw, 1.5rem);
    line-height: 1.687rem;
    color: #fff;
    text-transform: uppercase;
  }

  .hero-description {
    font-weight: 400;
    font-size: clamp(0.875rem, 4vw, 1rem);
    line-height: 1.5rem;
    color: #fff;
  }

  .button-link-contact-us {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export const TitleHero = styled.h1`
  font-weight: 700;
  font-size: 5rem;
  line-height: 7.5rem;
  color: #f83d48;
  text-transform: uppercase;
`
