import { useState } from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from "react-icons/cg";

import { breakpoints } from 'shared/breakpoints'
import logo from '../../assets/images/logo/only-text.svg'
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher'
import useIntlMessages from 'hooks/useIntlMessages'
import { HeaderWrapper, StyledHeader } from './Navbar.styles'
import NavLink from 'ui/NavLink/NavLink'
import Button from 'ui/Button/Button'

const HamburgerIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`

const DesktopNavigation = styled.nav`
  display: none;

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`

const DesktopUnorderedList = styled.ul`
  display: flex;
  gap: .5rem;
`

const MobileNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  border-top: 2px solid red;
  width: 100%;
  padding: .75rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const intl = useIntlMessages()

  const navbarItems = [
    {
      name: intl('home.navbar.link.portafolio'),
      href: 'portafolio',
    },
    {
      name: intl('home.navbar.link.learn.with.us'),
      href: 'learn-with-us',
    },
    {
      name: 'Services',
      href: 'services',
    },
    {
      name: intl('home.navbar.link.about.us'),
      href: 'about-us',
    },
  ]

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <StyledHeader>
      <HeaderWrapper size="lg">
        <a href="/">
          <img src={logo} alt="Binland logo" />
        </a>
        <HamburgerIcon>
          <LanguageSwitcher />
          {isOpen ? <CgClose onClick={handleIsOpen} /> : <GiHamburgerMenu onClick={handleIsOpen}/>}
        </HamburgerIcon>
        <DesktopNavigation>
          <DesktopUnorderedList>
            {navbarItems.map((navItem) => (
              <NavLink key={navItem.name} item={navItem} />
            ))}
          </DesktopUnorderedList>
          <Button type="primary" onClick={() => console.log('hello')}>
            {intl('home.navbar.button.contact.us')}
          </Button>
          <LanguageSwitcher />
        </DesktopNavigation>
      </HeaderWrapper>

      {isOpen && (
        <MobileNavigation>
          <ul>
            {navbarItems.map((navItem) => (
              <NavLink key={navItem.name} item={navItem} />
            ))}
          </ul>
          <Button type="primary" onClick={() => console.log('hello')}>
            {intl('home.navbar.button.contact.us')}
          </Button>
        </MobileNavigation>
      )}
    </StyledHeader>
  )
}

export default Navbar
