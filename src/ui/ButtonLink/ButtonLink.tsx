import { PropsWithChildren } from 'react'

import Button from 'ui/Button/Button'
import { CustonNavLink } from './ButtonLink.styles'

interface IButtonLinkProps extends PropsWithChildren {
  to: string
  type: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  isfullwidth?: boolean
  onClick?: (() => void) | undefined
}

const ButtonLink: React.FC<IButtonLinkProps> = ({
  to,
  type,
  size,
  className,
  isfullwidth,
  children,
  onClick,
}) => {
  return (
    <CustonNavLink to={to}>
      <Button
        type={type}
        size={size}
        className={className}
        isFullWidth={isfullwidth}
        onClick={onClick}
      >
        {children}
      </Button>
    </CustonNavLink>
  )
}

export default ButtonLink
