import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo/Isologo[H-Primario].svg'
import useIntlMessages from 'hooks/useIntlMessages'
import {
  StyledFooter,
  FooterWrapper,
  FooterLogoWrapper,
  FooterSocialMedia,
  FooterLinks,
} from './Footer.styles'
import SocialMedia from 'components/SocialMedia/SocialMedia'
import { enterpriseLinks, legalLinks } from './Footer.data'

const Footer: React.FC = () => {
  const intl = useIntlMessages()
  return (
    <StyledFooter>
      <FooterWrapper size="xl" isfullwidth>
        <FooterLogoWrapper>
          <Link to="/" rel="noopener noreferrer">
            <img className="footer-logo" src={logo} alt="Binland logo" />
          </Link>
          <p> &copy; Binland 2024. {intl('footer.all.rights.reserved')}.</p>
        </FooterLogoWrapper>
        <FooterLinks>
          <h4 className="title-links">Legal</h4>
          <div className="container-links">
            {legalLinks.map((element) => (
              <Link key={element.id} to={element.to} className="link-item">
                <span className="text-footer">{intl(element.name)}</span>
              </Link>
            ))}
          </div>
        </FooterLinks>
        <FooterLinks>
          <h4 className="title-links">{intl('footer.enterprise')}</h4>
          <div className="container-links">
            {enterpriseLinks.map((element) => (
              <Link key={element.id} to={element.to} className="link-item">
                <span className="text-footer">{intl(element.name)}</span>
              </Link>
            ))}
          </div>
        </FooterLinks>
        <FooterSocialMedia>
          <h4 className="title-social-media">{intl('footer.contact.us')}</h4>
          <SocialMedia />
          <div className="container-email">
            <HiOutlineMail size={20} style={{ color: 'white' }} />
            <span className="text-footer">binland.contacto@gmail.com</span>
          </div>
        </FooterSocialMedia>
      </FooterWrapper>
    </StyledFooter>
  )
}

export default Footer
