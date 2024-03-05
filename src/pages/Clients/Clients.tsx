import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { TbExternalLink } from 'react-icons/tb'

import Container from 'ui/Container/Container'
import SectionTitle from 'components/SectionTitle/SectionTitle'
import ButtonLink from 'ui/ButtonLink/ButtonLink'
import ClientCard from './ClientCard/ClientCard'
import { ExternalLink } from './ClientCard/ClientCard.styles'
import { clientBrands, clientData } from './ClientsData'
import {
  SectionHero,
  HeroBackground,
  HeroContentWrapper,
  IconsWrapper,
  OurWorkWrapper,
  SectionCards,
  CardsWrapper,
} from './Clients.styles'

const Clients: React.FC = () => {
  return (
    <>
      <SectionHero type="margin" size="xl" id="section-hero">
        <HeroBackground>
          <HeroContentWrapper>
            <div className="hero-text-wrapper">
              <h1 className="title-hero">our clients</h1>
              <p className="description-hero">
                Si disputa al la interes miradas ya decirte. Ch el capital
                casaron gozaban plateas se. Armino fulano fulgor van era.
                Distraigo verdadera oia del que simpatias soy reintegra.
              </p>
            </div>
            <IconsWrapper>
              {clientBrands.map((brand) => (
                <img
                  key={brand.id}
                  src={brand.src}
                  alt={brand.name}
                  className="img-brand"
                />
              ))}
            </IconsWrapper>
          </HeroContentWrapper>
        </HeroBackground>
        <Container size="lg">
          <OurWorkWrapper>
            <div className="our-works-content">
              <div>
                <SectionTitle text="our works" className="our-works-title" />
                <p className="our-works-description">
                  Si disputa al la interes miradas ya decirte. Ch el capital
                  casaron gozaban plateas se. Armino fulano fulgor van era.
                  Distraigo verdadera oia del que simpatias soy reintegra.
                </p>
              </div>
              <ButtonLink to="/" type="primary" className="button-see-all">
                Ver todos
                <TbExternalLink size={20} />
              </ButtonLink>
            </div>
            <div className="our-works-img">
              <div>
                <FaStar size={28} color="#F29D11" />
                <Link to="https://www.google.com" target="_BLANK">
                  <ExternalLink size={28} />
                </Link>
              </div>
              <div>
                <h3 className="our-works-client-name">Nombre de cliente</h3>
                <p className="our-works-client-description">
                  Si disputa al la interes miradas ya decirte. Ch el capital
                  casaron gozaban plateas se.
                </p>
              </div>
            </div>
          </OurWorkWrapper>
        </Container>
      </SectionHero>
      <SectionCards type="padding" size="xl">
        <CardsWrapper size="xl">
          {clientData.map((client) => (
            <ClientCard
              key={client.id}
              id={client.id}
              image={client.image}
              to={client.to}
              name={client.name}
              description={client.description}
            />
          ))}
        </CardsWrapper>
      </SectionCards>
    </>
  )
}

export default Clients
