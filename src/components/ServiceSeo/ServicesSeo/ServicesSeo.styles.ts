import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import Section from 'ui/Section/Section'

export const WrapperServiceSeo = styled(Section)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 2.625rem;
`
export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .seo-title-question {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
`
export const WrapperDescription = styled.div`
  /* width: 311px;
  height: 284px; */
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  gap: 2.25rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    /* width: 283px;
    height: 389px; */
    grid-template-columns: repeat(4, 1fr);
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
    color: #f83d48;
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
