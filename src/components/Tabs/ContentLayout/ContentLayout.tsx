import { PropsWithChildren } from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { ContentWrapper, SeeMoreButton } from './ContentLayout.styles'

const ContentLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ContentWrapper>{children}</ContentWrapper>
      <SeeMoreButton type="primary" rightIcon={<FaArrowUpRightFromSquare/>}>Ver mas</SeeMoreButton>
    </>
  )
}

export default ContentLayout
