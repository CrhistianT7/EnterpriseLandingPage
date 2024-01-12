import styled from 'styled-components'
import { FaInstagram } from "react-icons/fa";

import Container from 'ui/Container/Container'


const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  background: #D24545;
`

const FooterInformation = styled.div`
  display: flex;
`

const FooterLegal = styled.div`
  display: flex;
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container size="lg">
        <FooterInformation>
          <div>
            Logo
            <span>frase</span>
          </div>
          <div>
            -hours of operation -general info: email, phone number, ubicación
          </div>
          <div>
            Siguenos 
            <div>
              <FaInstagram/>
            </div>
          </div>
        </FooterInformation>
        <FooterLegal>politicas de privacidad, terminos de servicio</FooterLegal>
      </Container>
    </StyledFooter>
  )
}

export default Footer
