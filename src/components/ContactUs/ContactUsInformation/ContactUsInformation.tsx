import { WrapperContactUsInformation } from './ContactUsInformation.styles'
import SocialMedia from 'components/SocialMedia/SocialMedia'
import ContactUsContent from './ContactUsContent/ContactUsContent'

const ContactUsInformation: React.FC = () => {
  return (
    <WrapperContactUsInformation>
      <ContactUsContent />
      <SocialMedia />
    </WrapperContactUsInformation>
  )
}

export default ContactUsInformation
