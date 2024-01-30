import React from 'react'
import styled from 'styled-components'
import useIntlMessages from '../../hooks/useIntlMessages'

const StyledHero = styled.section`
  height: calc(100vh - 72px);
  height: calc(100svh - 72px);
  display: flex;
  align-items: center;
`

const Hero: React.FC = (): React.ReactElement => {
  const intl = useIntlMessages()

  return (
    <StyledHero id="hero">
      <div>
        <p>{intl("home.hero.subslogan")}</p>
        <p>{intl("home.hero.slogan")}</p>
      </div>
      <div>
        <a href="#">{intl("home.hero.contact.us.button.title")}</a>
      </div>
    </StyledHero>
  )
}

export default Hero
