import { colors } from 'styles/colors'
import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'
import ButtonLink from 'ui/ButtonLink/ButtonLink'

export const WrapperPageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.125rem;
  padding: 3rem 1.5rem;

  .not-found-img {
    margin-bottom: 2.5rem;
  }
`
export const ContentExclamation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
`

export const Exclamation = styled.div`
  font-weight: 800;
  font-size: 2.25rem;
  line-height: 4.5rem;
  text-transform: uppercase;

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 3rem;
  }
`
export const Text = styled.div`
  color: ${colors.secondary.disabled};
  font-size: 1rem;
  font-weight: 600;

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 1.5rem;
  }
`

export const ButtonPageNotFound = styled(ButtonLink)`
  margin-top: 1.5rem;
  border-radius: 1rem;
  background: none;
  font-weight: 600;
`
