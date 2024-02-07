import { TbBrandTwitter } from 'react-icons/tb'
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa'

interface SocialLinks {
  to: string
  icon: React.ReactNode
}

const ICON_SIZE = 20

export const socialLinksIcons: SocialLinks[] = [
  { to: 'github.com/Binlandorg', icon: <FaGithub size={ICON_SIZE} /> },
  {
    to: 'www.instagram.com/binland.dev',
    icon: <FaInstagram size={ICON_SIZE} />,
  },
  { to: 'www.linkedin.com', icon: <FaLinkedinIn size={ICON_SIZE} /> },
  { to: 'www.youtube.com/@Binland-dev', icon: <FaYoutube size={ICON_SIZE} /> },
  { to: 'www.tiktok.com/@binland.dev', icon: <FaTiktok size={ICON_SIZE} /> },
  { to: 'twitter.com/binland_dev', icon: <TbBrandTwitter size={ICON_SIZE} /> },
]

interface IFooterLinks {
  to: string
  name: string
}

export const legalLinks: IFooterLinks[] = [
  { to: '/terms-of-service', name: 'footer.terms.of.service' },
  { to: '/privacy-policy', name: 'footer.privacy.policy' },
  { to: '', name: 'footer.conditions.of.use' },
]

export const enterpriseLinks: IFooterLinks[] = [
  { to: '/about-us', name: 'footer.about.us' },
  { to: '/portafolio', name: 'footer.projects' },
  { to: '/frequently-asked-question', name: 'footer.FAQ' },
]
