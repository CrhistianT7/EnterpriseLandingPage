import { PropsWithChildren } from 'react'
import { StyledContainer } from './Container.styles'

interface IContainer extends PropsWithChildren {
  size: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  isFullWidth?: boolean | undefined
}

const Container: React.FC<IContainer> = ({
  size,
  children,
  className,
  isFullWidth,
}) => {
  return (
    <StyledContainer
      size={size}
      className={className}
      isFullWidth={isFullWidth}
    >
      {children}
    </StyledContainer>
  )
}

export default Container
