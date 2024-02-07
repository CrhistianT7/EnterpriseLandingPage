import useIntlMessages from 'hooks/useIntlMessages'
import {
  ContainerDetails,
  ItemDetails,
  Statistics,
} from './InformationDetails.style'

const InformationDetails = () => {
  const intl = useIntlMessages()

  return (
    <ContainerDetails>
      <ItemDetails></ItemDetails>
      <ItemDetails>
        <Statistics>15K</Statistics>
        <span>{intl('about.us.binland.information.details.clients')}</span>
      </ItemDetails>
      <ItemDetails>
        <Statistics>15K</Statistics>
        <span>
          {intl('about.us.binland.information.details.collaborators')}
        </span>
      </ItemDetails>
      <ItemDetails>
        <Statistics>15K</Statistics>
        <span>{intl('about.us.binland.information.details.services')}</span>
      </ItemDetails>
    </ContainerDetails>
  )
}

export default InformationDetails
