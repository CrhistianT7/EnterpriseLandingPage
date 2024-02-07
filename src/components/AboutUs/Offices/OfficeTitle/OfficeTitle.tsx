import useIntlMessages from 'hooks/useIntlMessages'
import { ContainerLine, ContainerTitle, Line, Text } from './OfficeTitle.styles'

const OfficeTitle = () => {
  const intl = useIntlMessages()

  return (
    <ContainerTitle>
      <ContainerLine>
        <Line />
      </ContainerLine>
      <Text>
        {intl('about.us.offices.title')}
        <span className="founder-point">.</span>
      </Text>
    </ContainerTitle>
  )
}

export default OfficeTitle
