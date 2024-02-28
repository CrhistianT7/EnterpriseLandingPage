import useIntlMessages from 'hooks/useIntlMessages'
import styled from 'styled-components'
import { colors } from 'styles/colors'

interface ITabProperties {
  key: string
  label: string
  children: React.ReactNode
}

const ContentWrapper = styled.div`
  background: ${colors.white.main};
  padding: 1rem;
`

const SingleMobileService: React.FC<ITabProperties> = ({
  key,
  label,
  children,
}) => {
  const intl = useIntlMessages()
  return (
    <ContentWrapper key={key}>
      <div style={{ color: 'red' }}> {intl(label)}</div>
      {children}
    </ContentWrapper>
  )
}

export default SingleMobileService
