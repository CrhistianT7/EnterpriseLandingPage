import { MdOutlineMail } from 'react-icons/md'
import { IoIosPhonePortrait } from 'react-icons/io'
import { CiLocationOn } from 'react-icons/ci'
import { PopupButton } from 'react-calendly'

import {
  ContactUsInformationIcons,
  ContactUsQuestion,
  ContactUsResponse,
  ContentButton,
  ContentQuestions,
  IconContactUs,
  QuestionButton,
} from './ContactUsContent.styles'

interface IContactInformation {
  id: number
  icon: React.ReactNode
  info: string
}

const ICON_SIZE = 20

const ContactInformation: IContactInformation[] = [
  {
    id: 1,
    icon: <MdOutlineMail size={ICON_SIZE} />,
    info: 'binland.contacto@gmail.com',
  },
  {
    id: 2,
    icon: <IoIosPhonePortrait size={ICON_SIZE} />,
    info: '+51 956 897 345',
  },
  { id: 3, icon: <CiLocationOn size={ICON_SIZE} />, info: 'Arequipa, Perú' },
]

const ContactUsContent: React.FC = () => {
  return (
    <>
      <ContentQuestions>
        <ContactUsQuestion>
          ¿Tienes un proyecto en mente? Podemos ayudarte
        </ContactUsQuestion>
        <ContactUsResponse>
          ¿Si tienes alguna duda? Solo envianos un mensaje o reserva una cita
          para resolver sus dudas y poder poner en marcha su proyecto y volverlo
          realidad.
        </ContactUsResponse>
      </ContentQuestions>
      <ContactUsInformationIcons>
        {ContactInformation.map((element) => (
          <IconContactUs key={element.id}>
            {element.icon}
            <span>{element.info}</span>
          </IconContactUs>
        ))}
      </ContactUsInformationIcons>
      <ContentButton>
        <QuestionButton>¿Desea agendar una cita?</QuestionButton>
        <PopupButton
          url="https://calendly.com/binland-contacto"
          rootElement={document.getElementById('root')!}
          text={'Agendar'}
          className="popup-button-custom"
        />
      </ContentButton>
    </>
  )
}

export default ContactUsContent
