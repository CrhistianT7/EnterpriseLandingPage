import { StyledAnchor, StyledListItem } from './NavLink.styles'

interface INavLink {
  name: string
  href: string
}

interface NavLinkProps {
  item: INavLink
  onClick?: (() => void)| undefined
}

const NavLink: React.FC<NavLinkProps> = ({
  item,
  onClick,
}): React.ReactElement => {
  return (
    <StyledListItem>
      <StyledAnchor role="navigation" to={item.href} onClick={onClick}>
        {item.name}
      </StyledAnchor>
    </StyledListItem>
  )
}

export default NavLink
