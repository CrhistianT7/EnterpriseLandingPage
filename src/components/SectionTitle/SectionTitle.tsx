import React from 'react'

import { Title } from './SectionTitle.style'

interface ISectionTitle {
  text: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const SectionTitle: React.FC<ISectionTitle> = ({
  text,
  size = 'lg',
  className,
}) => {
  return (
    <Title size={size} className={className}>
      {text}
      <span className="contact-us-point">.</span>
    </Title>
  )
}

export default SectionTitle
