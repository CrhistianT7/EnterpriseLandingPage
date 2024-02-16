import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'

import { colors } from 'styles/colors'

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const Error = styled.span`
  font-size: 0.75rem;
  color: ${colors.red[500]};
  margin-bottom: 0.25rem;
`
export const TitleForm = styled.h2`
  text-align: center;
  margin: 1rem 0rem;
`

export const ContainerForm = styled.div`
  padding: 0.75rem;
  background-color: ${colors.gray[100]};
  border-radius: 1rem;
  width: 100%;
  @media only screen and (min-width: ${breakpoints.xl}) {
    width: 60%;
  }
`
