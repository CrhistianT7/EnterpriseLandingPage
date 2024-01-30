import { TbExternalLink } from 'react-icons/tb'

import useIntlMessages from 'hooks/useIntlMessages'
import ButtonLink from 'ui/ButtonLink/ButtonLink'
import Google from './../../assets/images/brandings/google.svg'
import Github from './../../assets/images/brandings/github.svg'
import Windows from './../../assets/images/brandings/windows.svg'
import Amazon from './../../assets/images/brandings/amazon.svg'
import Meta from './../../assets/images/brandings/meta.svg'
import {
  StyledClientsSection,
  ClientsSectionWrapper,
  ClientsSectionContent,
  TitleAndButtonSection,
  BrandingsWrapper,
} from './ClientsSection.styles'

const Clients = () => {
  const intl = useIntlMessages()

  return (
    <StyledClientsSection>
      <ClientsSectionWrapper size="lg">
        <ClientsSectionContent>
          <TitleAndButtonSection>
            <h2 className="clients-title">
              {intl('home.clients.section.title')}
              <span className="span-point">.</span>
            </h2>
            <ButtonLink type="secondary" to="/portafolio">
              {intl('home.clients.section.button')}
              <TbExternalLink size={25} />
            </ButtonLink>
          </TitleAndButtonSection>
          <BrandingsWrapper>
            <img className="branding-img" src={Meta} />
            <img className="branding-img" src={Amazon} />
            <img className="branding-img" src={Github} />
            <img className="branding-img" src={Google} />
            <img className="branding-img" src={Windows} />
          </BrandingsWrapper>
        </ClientsSectionContent>
      </ClientsSectionWrapper>
    </StyledClientsSection>
  )
}

export default Clients
