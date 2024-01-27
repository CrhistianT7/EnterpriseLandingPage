import TeamMemberCard from 'components/TeamMemberCard/TeamMemberCard'
import Container from 'ui/Container/Container'
import Section from 'ui/Section/Section'
import { MembersWrapper } from './AboutUs.styles'

const AboutUs = () => {
  const founderMembers = [
    {
      id: 1,
      name: 'Andrew Turpo',
      position: 'Founder & CEO',
      image: 'random image',
      website_url: 'https://www.andrewturpo.com/',
    },
    {
      id: 2,
      name: 'Gustavo Ugarte',
      position: 'Founder & Frontend Developer',
      image: 'random image',
    },
    {
      id: 3,
      name: 'Jonatan Cervantes',
      position: 'Founder & UX/UI Designer',
      image: 'random image',
    },
    {
      id: 4,
      name: 'Ricardo Mamani',
      position: 'Founder & Frontend Develper',
      image: 'random image',
    },
  ]

  return (
    <Container size="lg" isfullwidth>
      <section>
        Somos una empresa de desarrollo de Software escalable, y eco-amigable. 
      </section>
      <Section size='sm' type='padding'>
        Meet our team
        <h3>Founders</h3>
        <MembersWrapper>
          {founderMembers.map((member) => {
            return <TeamMemberCard key={member.id} {...member} />
          })}
        </MembersWrapper>
        <h3>Colaboradores</h3>
        <div>Colaboradores</div>
      </Section>
    </Container>
  )
}

export default AboutUs
