import { ContactUsHero, SectionTitleHero, Title } from './ContactUs.styles'
import {
  ContactUsWrapper,
  ContentWrapper,
  SectionContactUs,
} from 'components/ContactUs/ContactUs.styles'
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
      <SectionContactUs size="md" type="padding">
        <ContactUsWrapper size="xl">
          <ContentWrapper>
            <ContactUsInformation />
            <FormContacUs />
          </ContentWrapper>
        </ContactUsWrapper>
      </SectionContactUs>
    </>
  )
}

export default ContactUs
