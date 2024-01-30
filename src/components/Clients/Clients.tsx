import { TbExternalLink } from 'react-icons/tb'

import useIntlMessages from 'hooks/useIntlMessages'
import ButtonLink from 'ui/ButtonLink/ButtonLink'
import Brandings from './Brandings'
import {
  StyledClientsSection,
  ClientsSectionWrapper,
  ClientsSectionContent,
  TitleAndButtonSection,
} from './Clients.styles'
import React from 'react'

const Clients: React.FC = () => {
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
          <Brandings />
        </ClientsSectionContent>
      </ClientsSectionWrapper>
    </StyledClientsSection>
  )
}

export default Clients
