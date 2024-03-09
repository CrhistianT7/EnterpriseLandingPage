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

export interface IDeliverables {
  titleFinalDeliverables: string
  descriptionFinalDeliverables: string
  deliverables: Array<{ id: string; name: string }>
}

const FinalProject: React.FC<IDeliverables> = ({
  titleFinalDeliverables,
  descriptionFinalDeliverables,
  deliverables,
}) => {
  return (
    <ContainerProjectFinal>
      <Container size="xl">
        <SectionProjectDeliverables type="margin" size="sm">
          <QuestionWrapperService>
            <ContentTitle>
              {titleFinalDeliverables}
              {/* <span className="red-letter">entregables</span> */}
            </ContentTitle>
            <ContentDescription>
              {descriptionFinalDeliverables}
            </ContentDescription>
          </QuestionWrapperService>
          <WrapperProjectDeliverables>
            {deliverables.map((element, index) => (
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
