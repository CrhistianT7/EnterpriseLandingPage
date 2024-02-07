import React from 'react'
import { StyledSection } from './section.styles'

interface ISection {
  type: 'margin' | 'padding'
  size: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  children: React.ReactNode
}

const Section: React.FC<ISection> = ({
  type,
  size,
  className,
  children,
}): React.ReactElement => {
  return (
    <StyledSection type={type} size={size} className={className}>
      {children}
    </StyledSection>
  )
}

export default Section
