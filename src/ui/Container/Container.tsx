import { PropsWithChildren } from 'react'
import { StyledContainer } from './Container.styles'

interface IContainer extends PropsWithChildren {
  id?: string
  size: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  isfullwidth?: boolean | undefined
}

const Container: React.FC<IContainer> = ({
  size,
  id,
  children,
  className,
  isfullwidth,
}) => {
  return (
    <StyledContainer
      id={id}
      size={size}
      className={className}
      $isfullwidth={isfullwidth}
    >
      {children}
    </StyledContainer>
  )
}

export default Container
