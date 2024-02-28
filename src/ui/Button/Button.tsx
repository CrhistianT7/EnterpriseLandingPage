import { PropsWithChildren } from 'react'
import { StyledButton } from './Button.styles'

interface IButton extends PropsWithChildren {
  type: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick?: (() => void) | undefined
  isFullWidth?: boolean
  className?: string
}

const Button: React.FC<IButton> = ({
  size = 'md',
  children,
  leftIcon,
  rightIcon,
  isFullWidth,
  className,
  ...props
}) => {
  return (
    <StyledButton
      {...props}
      size={size}
      $isfullwidth={isFullWidth}
      className={className}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </StyledButton>
  )
}

export default Button
