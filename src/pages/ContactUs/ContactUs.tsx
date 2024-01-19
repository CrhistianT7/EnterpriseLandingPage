import { BsSend } from 'react-icons/bs'
import { PopupButton } from 'react-calendly'

import './calendly.css'
import useIntlMessages from 'hooks/useIntlMessages'
import Button from 'ui/Button/Button'
import Input from 'ui/input/Input'
import Textarea from 'ui/Textarea/Textarea'
import {
  ContactUsHero,
  HeroWrapper,
  HeroTitle,
  HeroDescription,
  HeroContentWrapper,
  CommunicationWrapper,
  ContactOptionsWrapper,
  FormWrapper,
  StyledTitleForm,
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
        <FormWrapper>
          <StyledTitleForm>Contact Us Form</StyledTitleForm>
          <form>
            <Input id="1" value="some..." label="First Name" />
            <Input id="1" value="some..." label="Last Name" />
            <Input id="1" value="some..." label="Company" />
            <Input id="1" value="some..." label="Email" />
            <Input id="1" value="some..." label="Number" />
            <Textarea label='Message' name='message' placeholder='Hi, i am interesred in' id='message' required/>
            <strong>Select a service</strong>
            <br />
            <input type="radio" id="opcion1" name="opcion" value="opcion1" />
            <label htmlFor="opcion1">Software Product Development</label>
            <br />
            <input type="radio" id="opcion2" name="opcion" value="opcion2" />
            <label htmlFor="opcion2">UX/UI Design Solutions</label>
            <br />
            <input type="radio" id="opcion3" name="opcion" value="opcion3" />
            <label htmlFor="opcion3">Database Management Services</label>
            <br />
            <input type="radio" id="opcion4" name="opcion" value="opcion4" />
            <label htmlFor="opcion4">Emerging Technology Consulting</label>
            <br />
            <Button type="primary" rightIcon={<BsSend />}>
              Send
            </Button>
          </form>
        </FormWrapper>
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
