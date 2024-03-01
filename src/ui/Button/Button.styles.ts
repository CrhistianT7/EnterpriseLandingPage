import styled from 'styled-components'
import { colors } from '../../styles/colors'

interface IStyledButton {
  type: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  $isfullwidth: boolean | undefined
}

const typeStyles = (type: string) => {
  switch (type) {
    case 'primary':
      return `
        color: ${colors.white.main};
        background-color: ${colors.primary.main};

        &:focus {
          outline: 0.125rem solid ${colors.secondary.focus};
        }

        &:active {
          outline: none;
        }

        &:hover {
          background-color: ${colors.primary.hover};
        }
      `
    case 'secondary':
      return `
        color: ${colors.secondary.main};
        background: none;
        border: 0.125rem solid ${colors.secondary.main};

        &:active {
          outline: none;
        }

        &:focus {
          outline: none;
        }

        &:hover {
          background-color: ${colors.secondary.hover};
          color: ${colors.white.main};
        }
      `
    default:
      break
  }
}

const sizeStyles = (size: string) => {
  switch (size) {
    case 'sm':
      return `
        padding: 0.5rem 0.75rem;
        font-size: 0.875rem;
      `
    case 'lg':
      return `
        padding: 0.5rem 0.75rem;
        font-size: 1.125rem;
      `
    default:
      break
  }
}

export const StyledButton = styled.button<IStyledButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white.main};
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.6rem;
  line-height: 100%;
  cursor: pointer;
  height: fit-content;
  gap: 0.5rem;
  width: ${({ $isfullwidth }) => ($isfullwidth ? '100%' : 'fit-content')};

  ${(props) => typeStyles(props.type)}
  ${(props) => sizeStyles(props.size!)}

  &:hover {
    outline: none;
  }
`
