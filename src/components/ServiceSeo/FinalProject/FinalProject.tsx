import { BsCheck } from 'react-icons/bs'

import Container from 'ui/Container/Container'
import {
  ContainerProjectFinal,
  ContentDescription,
  ContentTitle,
  ProyectDeliverables,
  QuestionWrapperService,
  SectionProjectDeliverables,
  WrapperProjectDeliverables,
} from './FinalProject.style'

interface IFinalProyect {
  id: number
  name: string
}

interface IDeliverables {
  title: string
  description: string
  deliverable: IFinalProyect[]
}

const FinalProject: React.FC<IDeliverables> = ({
  title,
  description,
  deliverable,
}) => {
  return (
    <ContainerProjectFinal>
      <Container size="xl">
        <SectionProjectDeliverables type="margin" size="sm">
          <QuestionWrapperService>
            <ContentTitle>
              {title}
              <span className="red-letter">entregables</span>
            </ContentTitle>
            <ContentDescription>{description}</ContentDescription>
          </QuestionWrapperService>
          <WrapperProjectDeliverables>
            {deliverable.map((element, index) => (
              <ProyectDeliverables key={index}>
                <BsCheck className="icon-check" size={20} strokeWidth="1px" />
                <p>{element.name} </p>
              </ProyectDeliverables>
            ))}
          </WrapperProjectDeliverables>
        </SectionProjectDeliverables>
      </Container>
    </ContainerProjectFinal>
  )
}

export default FinalProject
