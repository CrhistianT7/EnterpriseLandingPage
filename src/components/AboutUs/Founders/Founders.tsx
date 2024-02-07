import TeamMemberCard from 'components/AboutUs/Founders/TeamMemberCard/TeamMemberCard'
// import FoundersTitle from 'components/AboutUs/Founders/TitleFounders/TitileFounderSection'
import { MembersWrapper } from 'pages/AboutUs/AboutUs.styles'
import Section from 'ui/Section/Section'
import { TitleFounders } from './TitleFounders/TitleFounders'

const founderMembers = [
  {
    id: 1,
    name: 'Andrew Turpo',
    position: 'Founder & CEO',
    image: 'src/assets/images/imgAboutUs/Cristian.png',
    quote:
      '“Hola que tal? Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal”',
    website_url: 'https://www.andrewturpo.com/',
    github_url: 'youtube.com',
  },
  {
    id: 2,
    name: 'Gustavo Ugarte',
    position: 'Founder & Frontend Developer',
    image: 'src/assets/images/imgAboutUs/gustavo.png',
    quote:
      '“Hola que tal? Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal”',
    website_url: 'https://www.andrewturpo.com/',
    github_url: 'youtube.com',
  },
  {
    id: 3,
    name: 'Jonatan Cervantes',
    position: 'Founder & UX/UI Designer',
    image: 'src/assets/images/imgAboutUs/jhon.png',
    quote:
      '“Hola que tal? Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal”',
    website_url: 'https://www.andrewturpo.com/',
    github_url: 'youtube.com',
  },
  {
    id: 4,
    name: 'Ricardo Mamani',
    position: 'Founder & Frontend Develper',
    image: 'src/assets/images/imgAboutUs/ricardo.png',
    quote:
      '“Hola que tal? Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal”',
    website_url: 'https://www.andrewturpo.com/',
    github_url: 'youtube.com',
  },
]

export const Founders = () => {
  return (
    <Section size="lg" type="margin">
      <TitleFounders />
      <MembersWrapper>
        {founderMembers.map((member) => {
          return <TeamMemberCard key={member.id} {...member} />
        })}
      </MembersWrapper>
    </Section>
  )
}

export default Founders
