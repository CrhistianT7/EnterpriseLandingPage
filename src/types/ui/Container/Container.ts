import { PropsWithChildren } from "react"

export interface IStyledContainer {
  size: 'sm' | 'md' | 'lg' | 'xl'
  $isfullwidth?: boolean | undefined
}


export interface IContainer extends PropsWithChildren, IStyledContainer {
  id?: string
  className?: string
}