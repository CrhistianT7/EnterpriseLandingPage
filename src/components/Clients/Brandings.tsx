import { useEffect, useState } from 'react'

import Google from './../../assets/images/brandings/google.svg'
import Github from './../../assets/images/brandings/github.svg'
import Windows from './../../assets/images/brandings/windows.svg'
import Amazon from './../../assets/images/brandings/amazon.svg'
import Meta from './../../assets/images/brandings/meta.svg'
import { BrandingsWrapper } from './Clients.styles'

interface Brand {
  id: number
  src: string
  name: string
}
const Brands: Brand[] = [
  { id: 1, src: Google, name: 'google' },
  { id: 2, src: Github, name: 'github' },
  { id: 3, src: Windows, name: 'windows' },
  { id: 4, src: Amazon, name: 'amazon' },
  { id: 5, src: Meta, name: 'meta' },
]

const Brandings: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([])

  useEffect(() => {
    setBrands(Brands)
  }, [])

  return (
    <BrandingsWrapper>
      {brands.map((brand) => (
        <img
          key={brand.id}
          className="branding-img"
          src={brand.src}
          alt={brand.name}
        />
      ))}
    </BrandingsWrapper>
  )
}

export default Brandings
