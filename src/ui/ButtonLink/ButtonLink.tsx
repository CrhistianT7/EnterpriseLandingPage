import { PropsWithChildren } from 'react'
import Button from 'ui/Button/Button'
import { CustonNavLink } from './ButtonLink.styles'

interface IButtonLinkProps extends PropsWithChildren {
  to: string
  type: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: (() => void) | undefined
}

const ButtonLink: React.FC<IButtonLinkProps> = ({
  to,
  type,
  size,
  children,
  className,
  onClick,
}) => {
  return (
    <CustonNavLink to={to}>
      <Button type={type} onClick={onClick} size={size} className={className}>
        {children}
      </Button>
    </CustonNavLink>
  )
}

export default ButtonLink
