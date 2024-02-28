import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'
import SingleMobileService from './SingleMobileService/SingleMobileService'

interface ITabProperties {
  key: string
  label: string
  children: React.ReactNode
}

interface ITabs {
  items: Array<ITabProperties>
}

const MobileServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media only screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`

const MobileServices: React.FC<ITabs> = ({ items }) => {
  return (
    <MobileServicesWrapper>
      {items.map((item) => {
        return <SingleMobileService {...item} />
      })}
    </MobileServicesWrapper>
  )
}

export default MobileServices
