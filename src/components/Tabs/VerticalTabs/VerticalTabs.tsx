import { useEffect, useState } from 'react'

import {
  ContentWrapper,
  SingleTab,
  TabsWrapper,
  VerticalTabsWrapper,
} from './VerticalTabs.styles'

interface IVerticalTabs {
  key: string
  label: string
  children: React.ReactNode
}

interface IVerticalTabsProps {
  items: Array<IVerticalTabs>
}

const VerticalTabs: React.FC<IVerticalTabsProps> = ({ items }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState<string>(
    () => items[0].key
  )
  const [currentContent, setCurrentContent] = useState<React.ReactNode>()

  const handleToggle = (index: string) => {
    setCurrentItemIndex(index)
  }

  useEffect(() => {
    setCurrentContent(
      items.filter((item) => item.key === currentItemIndex)[0].children
    )
  }, [currentItemIndex])

  return (
    <VerticalTabsWrapper>
      <TabsWrapper>
        {items.map((item) => {
          return (
            <SingleTab
              key={item.key}
              onClick={() => handleToggle(item.key)}
              className={currentItemIndex == item.key ? 'selected' : ''}
            >
              {item.label}
            </SingleTab>
          )
        })}
      </TabsWrapper>
      <ContentWrapper
        className={currentItemIndex == items[0].key ? 'top-left-rounded' : ''}
      >
        {currentContent}
      </ContentWrapper>
    </VerticalTabsWrapper>
  )
}

export default VerticalTabs
