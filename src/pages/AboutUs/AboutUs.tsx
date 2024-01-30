import TeamMemberCard from 'components/TeamMemberCard/TeamMemberCard'
import Container from 'ui/Container/Container'
import Section from 'ui/Section/Section'
import { MembersWrapper } from './AboutUs.styles'
import styled from 'styled-components'

const OurSlogan = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 329px;
  top: 135px;
  left: 200px;
  border-radius: 15px;
  background-color: #424242;
`

const OurSloganTitle = styled.p`
  font-weight: 400;
  font-style: italic;
  font-size: 36px;
  line-height: 54px;
  color: #ede9f6;
`
const AboutLand = styled.div`
  display: flex;
  margin-top: 70px;
  margin-bottom: 70px;
  width: 1200px;
  gap: 50px;
`
const DescriptionAboutUs = styled.div`
  width: 600px;
  & > :first-child {
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    color: #f83d48;
  }
  & > :nth-child(2) {
    position: relative;
    font-weight: 700;
    font-size: 54px;
    line-height: 81px;
    color: #424242;
  }
`
const SpotTitleAboutUs = styled.div`
  content: '';
  position: absolute;
  top: 60%;
  right: 100px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #f83d48;
`

const ContentDescriptionAboutUs = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #424242;
`
const GridContainer = styled.div`
  width: 450px;
  display: grid;
  grid-template-areas:
    'c b'
    'a d';
  grid-template-rows: auto;
  grid-template-columns: auto auto;
  gap: 10px;
`
const GridItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;

  &:nth-child(1) {
    grid-area: a;
    background-image: url('src/assets/images/imgAboutUs/edificio.jpeg');
    background-size: cover;
    border-radius: 15px;
  }

  &:nth-child(2) {
    grid-area: b;
  }

  &:nth-child(3) {
    grid-area: c;
  }

  &:nth-child(4) {
    grid-area: d;
  }
`

const TitleWithLine = styled.div`
  display: flex;
  align-items: center;
`
const TitleFounders = styled.h2`
  margin-right: 80px;
  font-weight: 700;
  font-size: 50px;
  line-height: 120px;
  position: relative;
  color: #424242;
`
const SpotTitle = styled.div`
  content: '';
  position: absolute;
  top: 56%;
  right: -12px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #f83d48;
`

const Line = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: #424242;
  width: 800px;
  border-radius: 15px;
`
const TitleOficce = styled.h2`
  margin-left: 80px;
  font-weight: 700;
  font-size: 50px;
  line-height: 120px;
  position: relative;
  color: #424242;
`

const AboutUs = () => {
  const founderMembers = [
    {
      id: 1,
      name: 'Andrew Turpo',
      position: 'Founder & CEO',
      image: 'src/assets/images/imgAboutUs/Founder.jpg',
      quote:
        '“Hola que tal? Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal”',
      website_url: 'https://www.andrewturpo.com/',
    },
    {
      id: 2,
      name: 'Gustavo Ugarte',
      position: 'Founder & Frontend Developer',
      image: 'src/assets/images/imgAboutUs/Founder.jpg',
      quote:
        '“Hola que tal? Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal”',
      website_url: 'https://www.andrewturpo.com/',
    },
    {
      id: 3,
      name: 'Jonatan Cervantes',
      position: 'Founder & UX/UI Designer',
      image: 'src/assets/images/imgAboutUs/Founder.jpg',
      quote:
        '“Hola que tal? Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal”',
      website_url: 'https://www.andrewturpo.com/',
    },
    {
      id: 4,
      name: 'Ricardo Mamani',
      position: 'Founder & Frontend Develper',
      image: 'src/assets/images/imgAboutUs/Founder.jpg',
      quote:
        '“Hola que tal? Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal”',
      website_url: 'https://www.andrewturpo.com/',
    },
  ]

  return (
    <Container size="xl" isfullwidth>
      <OurSlogan>
        <OurSloganTitle>“ Desarrollamos sus sueños no humedos ”</OurSloganTitle>
      </OurSlogan>
      <AboutLand>
        <DescriptionAboutUs>
          <p>Algo que mencionar</p>
          <h3>
            SOBRE NOSOTROS
            <SpotTitleAboutUs />
          </h3>
          <ContentDescriptionAboutUs>
            Un chingo de texto para describir quienes somos, Un chingo de texto
            para describir quienes somos Un chingo de texto para describir
            quienes somos Un chingo de texto para describir quienes somos Un
            chingo de texto para describir quienes somos Un chingo de texto para
            describir quienes somos Un chingo de texto para describir quienes
            somos Un chingo de texto para describir quienes somos Un chingo de
            texto para describir quienes somos. Un chingo de texto para
            describir quienes somos Un chingo de texto para describir quienes
            somos Un chingo de texto para describir quienes somos Un chingo de
            texto para describir quienes somos
          </ContentDescriptionAboutUs>
        </DescriptionAboutUs>
        <GridContainer>
          <GridItem></GridItem>
          <GridItem>
            <p>15K</p>
            <span>Clientes</span>
          </GridItem>
          <GridItem>
            <p>15K</p>
            <span>Colaboradores</span>
          </GridItem>
          <GridItem>
            <p>15K</p>
            <span>Servicios</span>
          </GridItem>
        </GridContainer>
      </AboutLand>
      <TitleWithLine>
        <TitleFounders>
          Founders
          <SpotTitle />
        </TitleFounders>
        <Line />
      </TitleWithLine>
      <Section size="sm" type="padding">
        <MembersWrapper>
          {founderMembers.map((member) => {
            return <TeamMemberCard key={member.id} {...member} />
          })}
        </MembersWrapper>
      </Section>
      <TitleWithLine>
        <Line />
        <TitleOficce>
          OFICINAS
          <SpotTitle />
        </TitleOficce>
      </TitleWithLine>
      <h3>Colaboradores</h3>
      <div>Colaboradores</div>
    </Container>
  )
}

export default AboutUs
