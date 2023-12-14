import { useState } from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

import useIntlMessages from '../../hooks/useIntlMessages'
import { breakpoints } from '../../shared/breakpoints'
import Button from '../../ui/Button/Button'
import NavLink from '../../ui/NavLink/NavLink'

const StyledNavbar = styled.nav`
  font-size: 16px;
  font-weight: 500;
`

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
  margin: auto;
  padding: 0 16px;
`

const NavLinksWrapper = styled.div`
  display: none;
  gap: 0.25rem;
  align-items: center;

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: flex;
  }
`

const NavLinksWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`

const StyledUnorderedList = styled.ul`
  display: flex;
  gap: 1rem;
`

const StyledUnorderedListMobile = styled.ul`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`

const HamburgerIcon = styled.div`
  display: flex;

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`

export const Navbar: React.FC = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const intl = useIntlMessages()

  const navbarItems = [
    {
      name: 'Portafolio',
      href: '#portafolio',
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

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <StyledNavbar>
      <NavbarWrapper>
        <NavLinksWrapper>
          <StyledUnorderedList>
            {navbarItems.map((navItem) => (
              <NavLink key={navItem.name} item={navItem} />
            ))}
          </StyledUnorderedList>
          <Button type="primary">
            {intl('home.navbar.button.contact.us')}
          </Button>
        </NavLinksWrapper>
        <HamburgerIcon>
          <Button type="secondary" onClick={toggleNavbar}>
            {isOpen ? 'X' : <GiHamburgerMenu />}
          </Button>
        </HamburgerIcon>
      </NavbarWrapper>
      {isOpen && (
        <NavLinksWrapperMobile>
          <StyledUnorderedListMobile>
            {navbarItems.map((navItem) => (
              <NavLink item={navItem} />
            ))}
          </StyledUnorderedListMobile>
          <Button type="primary">
            {intl('home.navbar.button.contact.us')}
          </Button>
        </NavLinksWrapperMobile>
      )}
    </StyledNavbar>
  )
}

export default Navbar
