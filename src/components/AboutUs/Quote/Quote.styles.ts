import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'
import { colors } from 'styles/colors'

export const OurSlogan = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100%;
  border-radius: 1rem;
  background-color: ${colors.secondary.main};
  margin: 1rem 0;

  @media only screen and (min-width: ${breakpoints.lg}) {
    height: 50vh;
    max-height: 25rem;
  }
`

export const AboutUsQuote = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: clamp(1rem, 4vw, 2.25rem);
  line-height: 24px;
  color: ${colors.gray[150]};
  position: relative;
  @media only screen and (min-width: ${breakpoints.lg}) {
    text-align: center;
  }
`

export const ComillaDerecha = styled.div`
  width: clamp(0.625rem, 4vw, 4rem);
  height: clamp(0.625rem, 4vw, 3rem);
  transform: rotate(0deg);
  position: absolute;
  top: 1.2rem;
  right: -075rem;

  @media only screen and (min-width: ${breakpoints.md}) {
    top: 1.56rem;
    right: -2.25rem;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    position: absolute;
    top: 3rem;
    right: -4.43rem;
  }
`
export const ComillaIzquierda = styled.div`
  width: clamp(0.625rem, 4vw, 4rem);
  height: clamp(0.625rem, 4vw, 3rem);
  position: absolute;
  left: -0.75rem;
  bottom: 1.18rem;

  @media only screen and (min-width: ${breakpoints.md}) {
    bottom: 1.56rem;
    left: -2.25rem;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    bottom: 3rem;
    left: -4.43rem;
  }
`
