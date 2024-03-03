import { PropsWithChildren } from 'react'
import { WithClassName } from 'types/components/shared'

export interface IStyledContainer {
  size: 'sm' | 'md' | 'lg' | 'xl'
  $isfullwidth?: boolean | undefined
}

export interface IContainer
  extends PropsWithChildren,
    IStyledContainer,
    WithClassName {
  id?: string
}
