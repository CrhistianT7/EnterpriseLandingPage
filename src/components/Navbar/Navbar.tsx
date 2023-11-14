import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

import useIntlMessages from "../../hooks/useIntlMessages";
import { breakpoints } from "../../shared/breakpoints";
import Button from "../../ui/Button/Button";
import NavLink from "../../ui/NavLink/NavLink";
import logo from "../../assets/images/logo/only-text.svg";

const StyledNavbar = styled.nav`
  width: 100%;
  position: fixed;
  padding-top: 32px;
  font-size: 16px;
  font-weight: 800;
  z-index: 10;
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

const LogoWrapper = styled.div``;

const NavLinksWrapper = styled.div`
  display: none;
  gap: 1rem;
  align-items: center;

  @media only screen and (min-width: ${breakpoints.sm}) {
    display: flex;
  }
`;

const NavLinksWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${breakpoints.sm}) {
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

  @media only screen and (min-width: ${breakpoints.sm}) {
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
      name: "Tutoriales",
      href: "/",
    },
  ];

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledNavbar>
      <NavbarWrapper>
        <LogoWrapper>
          <a href="/">
            <img src={logo} alt="Binland logo" />
          </a>
        </LogoWrapper>
        <NavLinksWrapper>
          <StyledUnorderedList>
            {navbarItems.map((navItem) => (
              <NavLink item={navItem} />
            ))}
          </StyledUnorderedList>
          <Button type="primary">
            {intl("home.navbar.button.contact.us")}
          </Button>
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
