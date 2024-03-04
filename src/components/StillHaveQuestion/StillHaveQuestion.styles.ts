import styled from 'styled-components'

import { colors } from 'styles/colors'

export const ContainerHaveQuestion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  gap: 2rem;
  border-radius: 1rem;
  margin: 1.875rem 0rem;
`
export const HaveQuestion = styled.div`
  text-align: center;
  display: grid;
  gap: 0.5rem;
`

export const SupportChat = styled.p`
  font-size: clamp(0.875rem, 4vw, 1rem);
  line-height: 1.5rem;
  font-weight: 400;
  color: ${colors.secondary.main};
`
