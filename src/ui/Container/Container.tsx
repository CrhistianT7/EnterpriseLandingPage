import { PropsWithChildren } from 'react'
import { StyledContainer } from './Container.styles'

interface IContainer extends PropsWithChildren {
  size: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  isfullwidth?: boolean | undefined
}

const Container: React.FC<IContainer> = ({
  size,
  children,
  className,
  isfullwidth,
}) => {
  return (
    <StyledContainer
      size={size}
      className={className}
      isfullwidth={isfullwidth}
    >
      {children}
    </StyledContainer>
  )
}

export default Container
