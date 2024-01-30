import Google from './../../assets/images/brandings/google.svg'
import Github from './../../assets/images/brandings/github.svg'
import Windows from './../../assets/images/brandings/windows.svg'
import Amazon from './../../assets/images/brandings/amazon.svg'
import Meta from './../../assets/images/brandings/meta.svg'
import { BrandingsWrapper } from './Clients.styles'
import React from 'react'

const Brandings: React.FC = () => {
  return (
    <BrandingsWrapper>
      <img className="branding-img" src={Meta} />
      <img className="branding-img" src={Amazon} />
      <img className="branding-img" src={Github} />
      <img className="branding-img" src={Google} />
      <img className="branding-img" src={Windows} />
    </BrandingsWrapper>
  )
}

export default Brandings
