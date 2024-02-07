import { PropsWithChildren } from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

import { ContentWrapper, SeeMoreButton } from './ContentLayout.styles'
import useIntlMessages from 'hooks/useIntlMessages'

const ContentLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const intl = useIntlMessages()

  return (
    <>
      <ContentWrapper>{children}</ContentWrapper>
      <SeeMoreButton type="primary" rightIcon={<FaArrowUpRightFromSquare />}>
        {intl("home.services.content.button.see.more")}
      </SeeMoreButton>
    </>
  )
}

export default ContentLayout
