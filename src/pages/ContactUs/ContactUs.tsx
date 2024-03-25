import {
  ContactUsHero,
  SectioContactUsPage,
  SectionTitleHero,
  Title,
  WrapperContactUs,
} from './ContactUs.styles'
import { ContactUsWrapper } from 'components/ContactUs/ContactUs.styles'
import ContactUsInformation from 'components/ContactUs/ContactUsInformation/ContactUsInformation'
import FormContacUs from 'components/ContactUs/FormContactUs/FormContactUs'

const ContactUs: React.FC = () => {
  return (
    <>
      <ContactUsHero>
        <SectionTitleHero type="padding" size="lg">
          <Title text="Contáctanos" />
        </SectionTitleHero>
      </ContactUsHero>
      <SectioContactUsPage size="md" type="padding">
        <ContactUsWrapper size="xl">
          <WrapperContactUs>
            <ContactUsInformation />
            <FormContacUs />
          </WrapperContactUs>
        </ContactUsWrapper>
      </SectioContactUsPage>
    </>
  )
}

export default ContactUs
