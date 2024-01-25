import { PropsWithChildren } from 'react'
import Button from 'ui/Button/Button'
import { CustonNavLink } from './ButtonLink.styles'

interface IButtonLinkProps extends PropsWithChildren {
  to: string
  type: 'primary' | 'secondary'
  onClick?: (() => void)| undefined
}

const ButtonLink: React.FC<IButtonLinkProps> = ({ to, type, children, onClick }) => {
  return (
    <CustonNavLink to={to}>
      <Button type={type} onClick={onClick}>{children}</Button>
    </CustonNavLink>
  )
}

export default ButtonLink
