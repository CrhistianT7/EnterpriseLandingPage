import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'
import { colors } from 'styles/colors'

export const DescriptionAboutUs = styled.div`
  width: 100%;

  & > :first-child {
    font-weight: 500;
    font-size: clamp(1.125rem, 4vw, 1.875rem);
    line-height: 3rem;
    padding: 0 0.625rem;
    text-transform: uppercase;
    color: ${colors.red[1000]};
  }

  & > :nth-child(2) {
    font-weight: 700;
    font-size: clamp(1.75rem, 4vw, 2.6875rem);
    line-height: normal;
    padding: 0 0.625rem;
    text-transform: uppercase;
    color: ${colors.secondary.main};

    .description-point {
      color: ${colors.primary.main};
    }
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    max-width: 50%;
  }
`

export const ContentDescriptionAboutUs = styled.p`
  font-weight: 400;
  font-size: clamp(0.5rem, 4vw, 1rem);
  line-height: 1.125rem;
  text-align: justify;
  padding: 0 1.666rem;
  margin-bottom: 1.25rem;
  color: ${colors.secondary.main};
`
