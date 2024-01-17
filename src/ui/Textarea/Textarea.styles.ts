import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const StyledLabel = styled.label`
  color: ${colors.gray};
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  font-weight: 500;
`

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 130px;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${colors.red[300]};
  border-radius: 6px;
  background-color: ${colors.white};
  resize: none;

  &:hover,
  &:focus {
    border-color: ${colors.red[700]};
  }

  &:focus {
    outline: none;
    border-color: ${colors.red[500]};
    box-shadow: 0 0 5px ${colors.red[500]};
  }

  &:active,
  &:focus:active {
    outline: none;
    border-color: ${colors.red[700]};
  }
`
