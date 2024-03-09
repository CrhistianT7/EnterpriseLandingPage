import Container from 'ui/Container/Container'
import {
  SectionTechnologies,
  Tech,
  TechnologiesDescription,
  TechnologiesTitle,
  WrapperTechnologies,
  WrapperTechnologiesTitle,
} from './Technologies.style'

export interface ITech {
  image: any
}

export interface ITechnologiesProps {
  titleTechnologies: string
  descriptionTechnologies: string
  tech: ITech[]
}

const Technologies: React.FC<ITechnologiesProps> = ({
  titleTechnologies,
  descriptionTechnologies,
  tech,
}) => {
  return (
    <Container size="lg">
      <SectionTechnologies type="margin" size="lg">
        <WrapperTechnologiesTitle>
          <TechnologiesTitle>
            {titleTechnologies}
            {/* <span className="text-red">Tecnologías</span> que manejamos */}
            {/* <span className="text-red">.</span> */}
          </TechnologiesTitle>
          <TechnologiesDescription>
            {descriptionTechnologies}
          </TechnologiesDescription>
        </WrapperTechnologiesTitle>
        <WrapperTechnologies>
          {tech.map((technology, index) => (
            <Tech key={index}>
              <img src={technology.image} />
            </Tech>
          ))}
        </WrapperTechnologies>
      </SectionTechnologies>
    </Container>
  )
}

export default Technologies
