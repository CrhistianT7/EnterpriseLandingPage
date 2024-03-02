import { PropsWithChildren } from "react"

export interface IStyledButton {
  type: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  $isfullwidth?: boolean | undefined
}

export interface IButton extends PropsWithChildren, IStyledButton {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick?: (() => void) | undefined
  className?: string
}
