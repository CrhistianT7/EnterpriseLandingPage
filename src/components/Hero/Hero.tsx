import React from 'react'
import styled from 'styled-components'
import useIntlMessages from '../../hooks/useIntlMessages'

const StyledHero = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
`

const Hero: React.FC = (): React.ReactElement => {
  const intl = useIntlMessages()

  return (
    <StyledHero id="hero">
      <div>
        {intl('home.hero.slogan')}
        <p>texto pequeño</p>
      </div>
      <div>
        {/** contact us */}
        <a href="#">Agendar cita</a>
        <button>Portafolio</button>
      </div>
    </StyledHero>
  )
}

export default Hero
