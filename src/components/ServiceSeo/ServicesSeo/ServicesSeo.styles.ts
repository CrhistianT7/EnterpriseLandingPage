import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import Section from 'ui/Section/Section'
import { colors } from 'styles/colors'

export const WrapperServiceSeo = styled(Section)`
  gap: 3rem;
  padding: 3rem 1.5rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding: 5rem, 5rem, 10rem;
    gap: 5rem;
  }
`
export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.secondary.disabled};
  gap: 2rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    gap: 11px;
  }

  .seo-title-question {
    font-weight: 600;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.875rem;

    @media only screen and (min-width: ${breakpoints.lg}) {
      line-height: 4.5rem;
    }
  }

  .seo-title-response {
    text-align: center;
    font-size: 1rem;
  }
`
export const WrapperDescription = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  gap: 2rem;
  color: ${colors.secondary.disabled};

  @media only screen and (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 3.125rem;
  }

  .wrapper-description-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 1rem;
    padding: 2rem;
    gap: 2rem;
  }

  .wrapper-description-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .wrapper-title-icon {
    color: ${colors.red[1000]};
  }

  .content-description-title {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.875rem;
  }

  .content-description-info-p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.312rem;
    text-align: center;
  }
`
