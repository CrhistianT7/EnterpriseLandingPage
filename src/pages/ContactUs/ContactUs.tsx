import { PopupButton } from 'react-calendly'

import './calendly.css'
import useIntlMessages from 'hooks/useIntlMessages'
import Button from 'ui/Button/Button'
import FormContacUs from 'components/FormContactUs/Form'
import {
  ContactUsHero,
  HeroWrapper,
  HeroTitle,
  HeroDescription,
  HeroContentWrapper,
  CommunicationWrapper,
  ContactOptionsWrapper,
} from './ContactUs.styles'

const ContactUs = () => {
  const intl = useIntlMessages()

  return (
    <div>
      <ContactUsHero>
        <HeroWrapper size="lg">
          <HeroContentWrapper>
            <HeroTitle>{intl('contact.us.hero.title')}</HeroTitle>
            <HeroDescription>
              {intl('contact.us.hero.description')}
            </HeroDescription>
            <Button type="primary" size="md">
              {intl('contact.us.hero.title')}
            </Button>
          </HeroContentWrapper>
        </HeroWrapper>
      </ContactUsHero>
      <CommunicationWrapper size="lg">
        <FormContacUs />
        <ContactOptionsWrapper>
          <h2>Other options to communicate</h2>
          <div>email: abdefg@gmail.com</div>
          <div>number: +51 987654321</div>
          <div>Social media acounts: </div>
          <ul>
            <li>linkedin</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
          <div>Live chat</div>
          <div>
            <h3>Schedule a Meeting</h3>
            <PopupButton
              url="https://calendly.com/binland-contacto"
              rootElement={document.getElementById('root')!}
              text={intl('contact.us.calendly.button')}
              className="popup-button-custom"
            />
          </div>
        </ContactOptionsWrapper>
      </CommunicationWrapper>
    </div>
  )
}

export default ContactUs
