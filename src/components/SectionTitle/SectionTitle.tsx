import React from 'react'

import { Title } from './SectionTitle.style'

interface ISectionTitle {
  text: string
  size: 'sm' | 'md' | 'lg' | 'xl'
}

const SectionTitle: React.FC<ISectionTitle> = ({ text, size = 'lg' }) => {
  return (
    <Title size={size}>
      {text}
      <span className="contact-us-point">.</span>
    </Title>
  )
}

export default SectionTitle
