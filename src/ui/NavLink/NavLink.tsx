import React from "react";
import styled from "styled-components";

import { colors } from "../../styles/colors";

interface INavLink {
  name: string;
  href: string;
}

interface NavLinkProps {
  item: INavLink;
}

const StyledListItem = styled.li`
  list-style-type: none;
`;

const StyledAnchor = styled.a`
  color: ${colors.primary.body};
  text-decoration: none;
`;

const NavLink: React.FC<NavLinkProps> = ({ item }): React.ReactElement => {
  return (
    <StyledListItem>
      <StyledAnchor role="navigation" href={item.href}>
        {item.name}
      </StyledAnchor>
    </StyledListItem>
  );
};

export default NavLink;
