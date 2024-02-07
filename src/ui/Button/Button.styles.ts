import styled from 'styled-components'
import { colors } from '../../styles/colors'

interface IStyledButton {
  type: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  isfullwidth: boolean | undefined
}

// border-radius: 0.6rem;
//     /* padding: 0.5rem 0.75rem;

const typeStyles = (type: string) => {
  switch (type) {
    case 'primary':
      return `
        color: ${colors.white.main};
        background-color: ${colors.primary.main};

        &:focus {
          ouline: 2px solid ${colors.secondary.focus};
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
        background-color: ${colors.white.main};
        border: 2px solid ${colors.secondary.main};

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
        padding: 8px 12px;
        font-size: 14px;
      `
    case 'lg':
      return `
        padding: 8px 12px;
        font-size: 18px;
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
  font-size: 16px;
  padding: 12px 16px;
  border: none;
  border-radius: 0.6rem;
  line-height: 100%;
  cursor: pointer;
  height: fit-content;
  gap: 0.5rem;
  width: ${({ isfullwidth }) => (isfullwidth ? '100%' : 'fit-content')};

  ${(props) => typeStyles(props.type)}
  ${(props) => sizeStyles(props.size!)}

  &:hover {
    outline: none;
  }
`
