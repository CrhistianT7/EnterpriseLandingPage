import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

import logo from '../../assets/images/logo/full-logo.svg'
import { Link } from 'react-router-dom'
import useIntlMessages from 'hooks/useIntlMessages'
import {
  FooterInformation,
  FooterInformationWrapper,
  FooterLegal,
  FooterLogoWrapper,
  FooterSocialMedia,
  FooterWrapper,
  StyledFooter,
} from './Footer.styles'

const Footer: React.FC = () => {
  const intl = useIntlMessages()
  return (
    <StyledFooter>
      <FooterWrapper size="lg">
        <FooterInformation>
          <FooterLogoWrapper>
            <a href="/">
              <img className="footer-logo" src={logo} alt="Binland logo" />
            </a>
            <p>{intl('footer.all.rights.reserved')}. &copy; Binland 2024</p>
          </FooterLogoWrapper>
          <FooterInformationWrapper>
            <h4>{intl('footer.contact.us')}</h4>
            <ul className="information-list">
              <span>binland@gmail.com</span>
              <span>+51 950070020</span>
              <span>Arequipa - Lima</span>
            </ul>
          </FooterInformationWrapper>
          <FooterSocialMedia>
            <h4>{intl('footer.follow.us')}</h4>
            <div className="social-media">
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={25} color="#d20427" />
              </Link>
              <Link
                to="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={25} color="#d20427" />
              </Link>
              <Link
                to="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={25} color="#d20427" />
              </Link>
            </div>
          </FooterSocialMedia>
        </FooterInformation>
        <FooterLegal>
          <Link to={'/privacy-policy'} className="legal-item">
            {intl('footer.privacy.policy')}
          </Link>
          <Link to={'/terms-of-service'} className="legal-item">
            {intl('footer.terms.of.service')}
          </Link>
          <Link to={'/frequently-asked-question'} className="legal-item">
            FAQ
          </Link>
        </FooterLegal>
      </FooterWrapper>
    </StyledFooter>
  )
}

export default Footer
