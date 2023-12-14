import styled from 'styled-components'
import { breakpoints } from 'shared/breakpoints'
import { GiHamburgerMenu } from 'react-icons/gi'

import Container from 'ui/Container/Container'
import logo from '../../assets/images/logo/only-text.svg'
// import Navbar from '../Navbar/Navbar'
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher'
import { useState } from 'react'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background: #ffdee4;
  padding: 16px 0;
  flex-direction: column;
`

const HeaderWrapper = styled(Container)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  position: relative;
`

const HamburgerIcon = styled.div`
  @media only screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`

const Navigation = styled.div`
  display: none;
  position: absolute;
  top: 60px;
  flex-direction: column;

  &.expanded {
    display: flex;
    justify-content: center;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: flex;
    gap: 10px;
    position: relative;
    top: 0;
  }
`

const StyledUl = styled.ul`
  @media only screen and (min-width: ${breakpoints.lg}) {
    display: flex;
    gap: 10px;
  }
`

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleIsOpen = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <StyledHeader>
      <HeaderWrapper size="lg">
        <a href="/">
          <img src={logo} alt="Binland logo" />
        </a>
        <HamburgerIcon onClick={handleIsOpen}>
          {isOpen ? 'X' : <GiHamburgerMenu />}
        </HamburgerIcon>
        <Navigation className={isOpen ? 'expanded' : ''}>
          <StyledUl>
            <li style={{ listStyleType: 'none' }}>hola</li>
            <li style={{ listStyleType: 'none' }}><button>asd</button></li>
            <li style={{ listStyleType: 'none' }}><LanguageSwitcher /></li>
          </StyledUl>
        </Navigation>
      </HeaderWrapper>
    </StyledHeader>
  )
}

export default Header
