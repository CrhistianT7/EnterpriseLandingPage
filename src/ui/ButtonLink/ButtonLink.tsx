import { PropsWithChildren } from 'react'
import Button from 'ui/Button/Button'
import { CustonNavLink } from './ButtonLink.styles'

interface IButtonLinkProps extends PropsWithChildren {
  to: string
  type: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  isfullwidth?: boolean | undefined
  onClick?: (() => void) | undefined
}

const ButtonLink: React.FC<IButtonLinkProps> = ({
  to,
  type,
  size,
  children,
  isfullwidth,
  onClick,
}) => {
  return (
    <CustonNavLink to={to}>
      <Button
        type={type}
        onClick={onClick}
        size={size}
        isFullWidth={isfullwidth}
      >
        {children}
      </Button>
    </CustonNavLink>
  )
}

export default ButtonLink
