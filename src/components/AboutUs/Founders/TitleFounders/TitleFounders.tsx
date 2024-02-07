import useIntlMessages from 'hooks/useIntlMessages'
import {
  ContainerTitle,
  ContainerLine,
  Line,
  Text,
} from './TitleFounders.style'

export const TitleFounders = () => {
  const intl = useIntlMessages()
  return (
    <ContainerTitle>
      <Text>
        {intl('about.us.founders.title')}
        <span className="founder-point">.</span>
      </Text>
      <ContainerLine>
        <Line />
      </ContainerLine>
    </ContainerTitle>
  )
}

export default TitleFounders
