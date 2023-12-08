import { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

import useIntlMessages from "../../hooks/useIntlMessages";
import { breakpoints } from "../../shared/breakpoints";
import Button from "../../ui/Button/Button";
import NavLink from "../../ui/NavLink/NavLink";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";

const StyledNavbar = styled.nav`
  font-size: 16px;
  font-weight: 500;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
  margin: auto;
  padding: 0 16px;

  /* @media only screen and (min-width: ${breakpoints.xs}) {
    max-width: 700px;
  } */
`;

const NavLinksWrapper = styled.div`
  display: none;
  gap: .25rem;
  align-items: center;

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: flex;
  }
`;

const NavLinksWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`;

const StyledUnorderedList = styled.ul`
  display: flex;
  gap: 1rem;
`;

const StyledUnorderedListMobile = styled.ul`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const HamburgerIcon = styled.div`
  display: flex;

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`;

export const Navbar: React.FC = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const intl = useIntlMessages();

  const navbarItems = [
    {
      name: "Portafolio",
      href: "#portafolio",
    },
    {
      name: "Learn with us",
      href: "/",
    },
    {
      name: "Services",
      href: "/",
    },
    {
      name: "About us",
      href: "/",
    },
  ];

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

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
            {intl("home.navbar.button.contact.us")}
          </Button>
          <LanguageSwitcher />
        </NavLinksWrapper>
        <HamburgerIcon>
          <button onClick={toggleNavbar}>
            {isOpen ? "X" : <GiHamburgerMenu />}
          </button>
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
            {intl("home.navbar.button.contact.us")}
          </Button>
        </NavLinksWrapperMobile>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
