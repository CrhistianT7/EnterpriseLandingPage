import React from 'react'
import styled from 'styled-components'
//import useIntlMessages from '../../hooks/useIntlMessages'

const StyledHero = styled.section`
  height: calc(100vh - 72px);
  height: calc(100svh - 72px);
  display: flex;
  align-items: center;
`

const Hero: React.FC = (): React.ReactElement => {
  //const intl = useIntlMessages()

  return (
    <StyledHero id="hero">
      <div>
        <p>Que el mundo ponga los ojos en ti</p>
        <p>Transformamos necesidades en soluciones digitales</p>
      </div>
      <div>
        <a href="#">Contactanos</a>
      </div>
    </StyledHero>
  )
}

export default Hero
