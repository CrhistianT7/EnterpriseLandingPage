import { useState } from 'react'
import { IoEllipse } from 'react-icons/io5'

import {
  ContainerProcess,
  ContainerUlTabs,
  TabsIcon,
  WrapperInfo,
  WrapperTabs,
  WrapperTitleProcess,
} from './NavService.style'
import Section from 'ui/Section/Section'

interface ItabInfo {
  id: string
  title: string
  description: string
}

interface IDevelopmentProcess {
  titleProcess: string
  descriptionProcess: string
  tabs: ItabInfo[]
}

const NavService: React.FC<IDevelopmentProcess> = ({
  titleProcess,
  descriptionProcess,
  tabs,
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
            {titleProcess}
            <span className="red-word">proceso</span>
          </p>
          <p className="description-process">{descriptionProcess}</p>
        </WrapperTitleProcess>
        <WrapperTabs>
          <ContainerUlTabs>
            <TabsIcon
              className={activeTab == 0 ? 'selected' : 'desactive'}
              onClick={() => selection(0)}
            >
              <IoEllipse size={18} />
            </TabsIcon>
            <TabsIcon
              className={activeTab == 1 ? 'selected' : 'desactive'}
              onClick={() => selection(1)}
            >
              <IoEllipse size={18} />
            </TabsIcon>
            <TabsIcon
              className={activeTab == 2 ? 'selected' : 'desactive'}
              onClick={() => selection(2)}
            >
              <IoEllipse size={18} />
            </TabsIcon>
            <TabsIcon
              className={activeTab == 3 ? 'selected' : 'desactive'}
              onClick={() => selection(3)}
            >
              <IoEllipse size={18} />
            </TabsIcon>
          </ContainerUlTabs>
          <div className="tab-content">
            {tabs.map((tab, index) => (
              <WrapperInfo
                key={index}
                style={{ display: activeTab === index ? '' : 'none' }}
              >
                <p className="wrapper-info-title">{tab.title}</p>
                <p className="wrapper-info-description"> {tab.description}</p>
              </WrapperInfo>
            ))}
          </div>
        </WrapperTabs>
      </ContainerProcess>
    </Section>
  )
}
export default NavService
