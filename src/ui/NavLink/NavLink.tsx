import { StyledAnchor, StyledListItem } from "./NavLink.styles";

interface INavLink {
  name: string;
  href: string;
}

interface NavLinkProps {
  item: INavLink;
}

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
