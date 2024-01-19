import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
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
import Button from 'ui/Button/Button'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const navigate = useNavigate()

  const navigateContactUs = () => {
    navigate('/contact-us')
  }

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
      name: intl('home.navbar.link.services'),
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
    <>
      <HeaderEmptyBackground />
      <StyledHeader>
        <HeaderWrapper size="lg">
          <a href="/">
            <img src={logo} alt="Binland logo" />
          </a>
          <HamburgerIcon>
            <LanguageSwitcher />
            {isOpen ? (
              <CgClose onClick={handleIsOpen} />
            ) : (
              <GiHamburgerMenu onClick={handleIsOpen} />
            )}
          </HamburgerIcon>
          <DesktopNavigation>
            <DesktopUnorderedList>
              {navbarItems.map((navItem) => (
                <NavLink key={navItem.name} item={navItem} />
              ))}
            </DesktopUnorderedList>
            <Button type="primary" onClick={navigateContactUs}>
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
            <Button type="primary" onClick={navigateContactUs}>
              {intl('home.navbar.button.contact.us')}
            </Button>
          </MobileNavigation>
        )}
      </StyledHeader>
    </>
  )
}

export default Navbar
