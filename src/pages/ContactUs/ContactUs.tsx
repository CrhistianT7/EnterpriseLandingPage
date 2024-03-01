import Section from 'ui/Section/Section'
import { ContactUsHero, Title } from './ContactUs.styles'
import {
  ContactUsWrapper,
  ContentWrapper,
  SectionContactUs,
} from 'components/ContactUs/ContactUs.styles'
import ContactUsInformation from 'components/ContactUs/ContactUsInformation/ContactUsInformation'
import FormContacUs from 'components/ContactUs/FormContactUs/FormContactUs'

const ContactUs: React.FC = () => {
  return (
    <div>
      <ContactUsHero>
        <Section type="padding" size="lg">
          <Title text="Contáctanos" />
        </Section>
      </ContactUsHero>
      <SectionContactUs size="md" type="padding">
        <ContactUsWrapper size="xl">
          <ContentWrapper>
            <ContactUsInformation />
            <FormContacUs />
          </ContentWrapper>
        </ContactUsWrapper>
      </SectionContactUs>
    </div>
  )
}

export default ContactUs
