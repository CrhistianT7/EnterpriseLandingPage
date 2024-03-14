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
} from './Deliverables.style'
import { IDeliverable } from 'types/components/service'

// export interface IDeliverables {
//   titleFinalDeliverables: string
//   descriptionFinalDeliverables: string
//   deliverables: Array<{ id: string; name: string }>
// }

const Deliverables: React.FC<IDeliverable> = ({
  question,
  description,
  items,
}) => {
  return (
    <ContainerProjectFinal>
      <Container size="xl">
        <SectionProjectDeliverables type="margin" size="sm">
          <QuestionWrapperService>
            <ContentTitle>
              {question}
              {/* <span className="red-letter">entregables</span> */}
            </ContentTitle>
            <ContentDescription>{description}</ContentDescription>
          </QuestionWrapperService>
          <WrapperProjectDeliverables>
            {items.map((element, index) => (
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

export default Deliverables
