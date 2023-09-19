import React, { useState } from "react";
import styled from "styled-components";

import useIntlMessages from "../../hooks/useIntlMessages";
import { breakpoints } from "../../shared/breakpoints";
import Button from "../../ui/Button/Button";
import NavLink from "../../ui/NavLink/NavLink";

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

  /* @media only screen and (min-width: ${breakpoints.xs}) {
    max-width: 700px;
  } */
`;

const LogoWrapper = styled.div``;

const NavLinksWrapper = styled.div`
  display: none;

  @media only screen and (min-width: ${breakpoints.sm}) {
    display: flex;
  }
`;

const StyledUnorderedList = styled.ul`
  display: flex;
`;

const HamburgerIcon = styled.div`
  display: flex;

  @media only screen and (min-width: ${breakpoints.sm}) {
    display: none;
  }
`

export const Navbar: React.FC = (): React.ReactElement => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const intl = useIntlMessages();

  const navbarItems = [
    {
      name: "Portafolio",
      href: "/portafolio",
    },
    {
      name: "Tutoriales",
      href: "/",
    },
  ];

  const toggleNavbar = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <StyledNavbar>
      <NavbarWrapper>
        <LogoWrapper>
          <a href="/">Logo</a>
        </LogoWrapper>
        <NavLinksWrapper className="links">
          <StyledUnorderedList>
            {navbarItems.map((navItem) => (
              <NavLink item={navItem} />
            ))}
          </StyledUnorderedList>
          <Button type="primary">
            {intl("home.navbar.button.contact.us")}
          </Button>
          <Button type="secondary">
            {intl("home.navbar.button.contact.us")}
          </Button>
        </NavLinksWrapper>

        <HamburgerIcon>
          <button onClick={toggleNavbar}>{isOpen?"X":"-"}</button>
        </HamburgerIcon>
      </NavbarWrapper>
      {isOpen && <>component just changed with other wrapping properties here comes the other menu</>}
    </StyledNavbar>
  );
};

export default Navbar;
