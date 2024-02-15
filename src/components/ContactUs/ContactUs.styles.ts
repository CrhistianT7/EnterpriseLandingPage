import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #fff;
  gap: 0.75rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 100%;
    display: flex;
    flex-direction: row;
    background: none;
  }
`
