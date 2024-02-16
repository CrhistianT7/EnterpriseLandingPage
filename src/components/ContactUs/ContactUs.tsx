import Section from 'ui/Section/Section'
import ContactUsInformation from './ContactUsInformation/ContactUsInformation'
import FormContacUs from './FormContactUs/FormContactUs'
import { ContentWrapper } from './ContactUs.styles'
import SectionTitle from 'components/SectionTitle/SectionTitle'

const ContactUs: React.FC = () => {
  return (
    <Section size="xl" type="padding">
      <SectionTitle size="lg" text="Contactanos" />
      <ContentWrapper>
        <ContactUsInformation />
        <FormContacUs />
      </ContentWrapper>
    </Section>
  )
}

export default ContactUs
