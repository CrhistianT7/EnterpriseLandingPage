import { TbSend } from 'react-icons/tb'

import { BackgroundSeo, ContentHero, TitleHero } from './Hero.style'
import ButtonLink from 'ui/ButtonLink/ButtonLink'

const Hero: React.FC = () => {
  return (
    <BackgroundSeo>
      <ContentHero>
        <div>
          <p className="hero-sub-title">El posicionamiento es importante</p>
          <TitleHero>seo</TitleHero>
          <span className="hero-description">
            Un texto bien cool para describir el servicio de manera clara y
            corta para que el cliente entienda, quizás 2 lineas o 3 son
            duficientes.
          </span>
        </div>
        <div>
          <ButtonLink type="primary" to="/contact-us" size="lg" isfullwidth>
            <span className="button-link-contact-us">Contactanos</span>
            <TbSend size={20} />
          </ButtonLink>
        </div>
      </ContentHero>
    </BackgroundSeo>
  )
}

export default Hero
