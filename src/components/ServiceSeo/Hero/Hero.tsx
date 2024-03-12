import { TbSend } from 'react-icons/tb'

import {
  BackgroundService,
  ContentHero,
  TitleHero,
  SectionHero,
  WrapperHero,
} from './Hero.style'
import ButtonLink from 'ui/ButtonLink/ButtonLink'
import { IHeroPropsTitle } from 'types/components/service'

const Hero: React.FC<IHeroPropsTitle> = ({
  id,
  serviceName,
  serviceSubTitle,
  serviceDescription,
}) => {
  return (
    <BackgroundService id={id}>
      <SectionHero type="margin" size="xl">
        <WrapperHero size="xl">
          <ContentHero>
            <div>
              <p className="hero-sub-title">{serviceSubTitle} </p>
              <TitleHero>{serviceName}</TitleHero>
              <span className="hero-description">{serviceDescription}</span>
            </div>
            <div>
              <ButtonLink
                type="primary"
                to="/contact-us"
                size="lg"
                className="button-contact-us"
              >
                <span className="button-link-contact-us">Contactanos</span>
                <TbSend size={20} />
              </ButtonLink>
            </div>
          </ContentHero>
        </WrapperHero>
      </SectionHero>
    </BackgroundService>
  )
}

export default Hero
