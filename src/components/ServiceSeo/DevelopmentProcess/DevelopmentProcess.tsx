import { useState } from 'react'
import { IoEllipse } from 'react-icons/io5'

import {
  ContainerProcess,
  ContainerUlTabs,
  TabsIcon,
  WrapperInfo,
  WrapperTabs,
  WrapperTitleProcess,
} from './DevelopmentProcess.style'
import Section from 'ui/Section/Section'
import { IDevelopmentProcess } from 'types/components/service'

const DevelopmentProcess: React.FC<IDevelopmentProcess> = ({
  question,
  description,
  steps,
}) => {
  const [activeTab, setActiveTab] = useState(0)

  const selection = (index: any) => {
    setActiveTab(index)
  }

  return (
    <Section size="lg" type="padding">
      <ContainerProcess size="xl">
        <WrapperTitleProcess>
          <p className="title-process">
            {question}
            <span className="red-word">proceso</span>
          </p>
          <p className="description-process">{description}</p>
        </WrapperTitleProcess>
        <WrapperTabs>
          <ContainerUlTabs>
            {steps.map((step, index) => (
              <TabsIcon
                key={step.title}
                className={activeTab === index ? 'selected' : 'desactive'}
                onClick={() => selection(index)}
              >
                <IoEllipse size={18} />
              </TabsIcon>
            ))}
          </ContainerUlTabs>
          <div className="tab-content">
            {steps.map((step, index) => (
              <WrapperInfo
                key={index}
                style={{ display: activeTab === index ? '' : 'none' }}
              >
                <p className="wrapper-info-title">{step.title}</p>
                <p className="wrapper-info-description"> {step.description}</p>
              </WrapperInfo>
            ))}
          </div>
        </WrapperTabs>
      </ContainerProcess>
    </Section>
  )
}
export default DevelopmentProcess
