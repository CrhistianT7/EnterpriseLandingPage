import { InformationContainer } from './BinlandInformation.styles'
import Description from './Description/Description'
import InformationDetails from './InformationDetails/InformationDetails'

const BinlandInformation = () => {
  return (
    <InformationContainer size="md" type={'margin'}>
      <Description />
      <InformationDetails />
    </InformationContainer>
  )
}

export default BinlandInformation
