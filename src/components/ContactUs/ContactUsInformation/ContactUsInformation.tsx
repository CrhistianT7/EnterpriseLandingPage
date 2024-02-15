import { ContentContactUsInformation } from './ContactUsInformation.styles'

import SocialMedia from 'components/SocialMedia/SocialMedia'
import ContactUsContent from './ContactUsContent/ContactUsContent'

const ContactUsInformation: React.FC = () => {
  return (
    <ContentContactUsInformation>
      <ContactUsContent />
      <SocialMedia />
    </ContentContactUsInformation>
  )
}

export default ContactUsInformation
