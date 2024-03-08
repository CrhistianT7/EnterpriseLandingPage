import Container from 'ui/Container/Container'
import {
  SectionTechnologies,
  Tech,
  TechnologiesDescription,
  TechnologiesTitle,
  WrapperTechnologies,
  WrapperTechnologiesTitle,
} from './Technologies.style'

interface ITech {
  image: any
}

interface ITechnologiesProps {
  techTitle: string
  techDescription: string
  img: ITech[]
}

const Technologies: React.FC<ITechnologiesProps> = ({
  techTitle,
  techDescription,
  img,
}) => {
  return (
    <SectionTechnologies type="margin" size="lg">
      <Container size="lg">
        <WrapperTechnologiesTitle>
          <TechnologiesTitle>
            {techTitle}
            <span className="text-red">Tecnologías</span> que manejamos
            <span className="text-red">.</span>
          </TechnologiesTitle>
          <TechnologiesDescription>{techDescription}</TechnologiesDescription>
        </WrapperTechnologiesTitle>
        <WrapperTechnologies>
          {img.map((technology, index) => (
            <Tech key={index}>
              <img src={technology.image} />
            </Tech>
          ))}
        </WrapperTechnologies>
      </Container>
    </SectionTechnologies>
  )
}

export default Technologies
