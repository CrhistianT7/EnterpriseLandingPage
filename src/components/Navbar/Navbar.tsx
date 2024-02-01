import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import { NavLink as ReactRouterNavLink } from 'react-router-dom'
import logo from '../../assets/images/logo/only-text.svg'
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher'
import useIntlMessages from 'hooks/useIntlMessages'
import {
  DesktopNavigation,
  DesktopUnorderedList,
  HamburgerIcon,
  HeaderEmptyBackground,
  HeaderWrapper,
  MobileNavigation,
  StyledHeader,
} from './Navbar.styles'
import NavLink from 'ui/NavLink/NavLink'
import ButtonLink from 'ui/ButtonLink/ButtonLink'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const intl = useIntlMessages()

  const navbarItems = [
    {
      name: intl('home.navbar.link.portafolio'),
      href: '/portafolio',
    },
    {
      name: intl('home.navbar.link.learn.with.us'),
      href: '/lets-learn',
    },
    {
      name: intl('home.navbar.link.services'),
      href: '/services',
    },
    {
      name: intl('home.navbar.link.about.us'),
      href: '/about-us',
    },
  ]

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <HeaderEmptyBackground />
      <StyledHeader>
        <HeaderWrapper size="lg">
          <ReactRouterNavLink to={'/'}>
            <img src={logo} alt="Binland logo" />
          </ReactRouterNavLink>
          <HamburgerIcon>
            <LanguageSwitcher />
            {isOpen ? (
              <CgClose onClick={handleIsOpen} cursor={'pointer'} />
            ) : (
              <GiHamburgerMenu onClick={handleIsOpen} cursor={'pointer'} />
            )}
          </HamburgerIcon>
          <DesktopNavigation>
            <DesktopUnorderedList>
              {navbarItems.map((navItem) => (
                <NavLink key={navItem.name} item={navItem} />
              ))}
            </DesktopUnorderedList>
            <ButtonLink to="/contact-us" type="secondary" size="lg">
              {intl('home.navbar.button.contact.us')}
            </ButtonLink>
            <LanguageSwitcher />
          </DesktopNavigation>
        </HeaderWrapper>

        {isOpen && (
          <MobileNavigation>
            <ul>
              {navbarItems.map((navItem) => (
                <NavLink
                  key={navItem.name}
                  item={navItem}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </ul>
            <ButtonLink
              to="/contact-us"
              type="primary"
              size="lg"
              onClick={() => setIsOpen(false)}
            >
              {intl('home.navbar.button.contact.us')}
            </ButtonLink>
          </MobileNavigation>
        )}
      </StyledHeader>
    </>
  )
}

export default Navbar
