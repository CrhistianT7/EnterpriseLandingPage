import TeamMemberCard from 'components/TeamMemberCard/TeamMemberCard'
import Container from 'ui/Container/Container'
import Section from 'ui/Section/Section'
import { MembersWrapper } from './AboutUs.styles'

const AboutUs = () => {
  const founderMembers = [
    {
      name: 'Andrew Turpo',
      position: 'Founder & CEO',
      image: 'random image',
      website: 'https://www.andrewturpo.com/',
    },
    {
      name: 'Gustavo Ugarte',
      position: 'Founder & Frontend Developer',
      image: 'random image',
    },
    {
      name: 'Jonatan Cervantes',
      position: 'Founder & UX/UI Designer',
      image: 'random image',
    },
    {
      name: 'Ricardo Mamani',
      position: 'Founder & Frontend Develper',
      image: 'random image',
    },
  ]

  return (
    <Container size="lg" isFullWidth>
      <section>
        Somos una empresa de desarrollo de Software escalable, y eco-amigable. 
      </section>
      <Section size='sm' type='padding'>
        Meet our team
        <h3>Founders</h3>
        <MembersWrapper>
          {founderMembers.map((member) => {
            return <TeamMemberCard {...member} />
          })}
        </MembersWrapper>
        <h3>Colaboradores</h3>
        <div>Colaboradores</div>
      </Section>
    </Container>
  )
}

export default AboutUs
