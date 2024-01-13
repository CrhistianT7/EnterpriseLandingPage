import Button from 'ui/Button/Button'
import Header from 'components/Header/Header'
import { BsSend } from 'react-icons/bs'
import Input from 'ui/input/Input'
import useIntlMessages from 'hooks/useIntlMessages'
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
      <Header />
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
            <Input id="1" value="some..." label="Message" />
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
              {' '}
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
            <Button size="lg" type="secondary">
              Go calendly
            </Button>
          </div>
        </ContactOptionsWrapper>
      </CommunicationWrapper>
    </div>
  )
}

export default ContactUs

// const FAQWrapper = styled(Container)`
//   width: 100%;
//   padding: 10px;
// `

//   const questions = [
//     {
//       question: 'What areas does our consultancy cover?',
//       answer:
//         'We specialize in business strategy, IT, HR management, and sustainable development.',
//     },
//     {
//       question: 'Why choose our consultancy services?',
//       answer:
//         'We optimize operations, drive growth, and provide tailored solutions for your business challenges.',
//     },
//     {
//       question: 'How do we work with clients?',
//       answer:
//         'We collaborate closely, understand goals, conduct analyses, and deliver practical recommendations.',
//     },
//     {
//       question: 'What expertise does our consultant team have?',
//       answer:
//         'Our professionals bring extensive experience across industries for a comprehensive and tailored approach.',
//     },
//     {
//       question: 'How do we ensure client information confidentiality?',
//       answer:
//         'We are committed to strict security measures and uphold the highest ethical standards to protect privacy.',
//     },
//   ]

//       <FAQWrapper size="lg">
//         {questions.map((ele) => {
//           return (
//             <div>
//               <strong>
//                 {ele.question} <IoChevronDown />
//               </strong>
//               <p>{ele.answer}</p>
//             </div>
//           )
//         })}
//       </FAQWrapper>
