import ContentLayout from "components/Tabs/ContentLayout/ContentLayout"
import HorizontalTabs from "components/Tabs/HorizontalTabs/HorizontalTabs"
import VerticalTabs from "components/Tabs/VerticalTabs/VerticalTabs"
import Section from "ui/Section/Section"

interface ITabProperties {
  key: string
  label: string
  children: React.ReactNode
}

interface IVerticalTabs {
  key: string
  label: string
  children: React.ReactNode
}

const Services: React.FC = () => {
  const subitemsDesign: Array<IVerticalTabs> = [
    {
      key: '1',
      label: 'Development of graphic pieces',
      children: (
        <ContentLayout>
          <div>Development of graphic pieces</div>
        </ContentLayout>
      ),
    },
    {
      key: '2',
      label: 'Branding',
      children: (
        <ContentLayout>
          <div>Branding</div>
        </ContentLayout>
      ),
    },
    {
      key: '3',
      label: 'UX/UI Design',
      children: (
        <ContentLayout>
          <div>UX/UI</div>
        </ContentLayout>
      ),
    },
    {
      key: '4',
      label: 'Ilustrations',
      children: (
        <ContentLayout>
          <div>Ilustratioins</div>
        </ContentLayout>
      ),
    },
  ]

  const subItemsWebDevelopment: Array<IVerticalTabs> = [
    {
      key: '1',
      label: 'Full Stack',
      children: (
        <ContentLayout>
          <div>Full Stack</div>
        </ContentLayout>
      ),
    },
    {
      key: '2',
      label: 'Mobile Development',
      children: (
        <ContentLayout>
          <div>Mobile Developmetn</div>
        </ContentLayout>
      ),
    },
  ]
  const items: Array<ITabProperties> = [
    {
      key: '1',
      label: 'Design',
      children: <VerticalTabs key={'1'} items={subitemsDesign} />,
    },
    {
      key: '2',
      label: 'Web Development',
      children: <VerticalTabs key={'2'} items={subItemsWebDevelopment} />,
    },
    {
      key: '3',
      label: 'Digital Stuff',
      children: <div>Content 3</div>,
    },
    {
      key: '4',
      label: 'Web 3.0',
      children: <div>Content 4</div>,
    },
  ]
  return <Section size="lg" type="padding">
  <HorizontalTabs items={items} />
  </Section>
}

export default Services
