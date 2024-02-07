import Section from 'ui/Section/Section'
import CollageOffice from './CollageOffice/CollageOffice'
import OfficeTitle from './OfficeTitle/OfficeTitle'
import SubTitleOffice from './SubTitleOffice/SubTitleOffice'

export const Office = () => {
  return (
    <Section size='md' type='margin'>
      <OfficeTitle />
      <SubTitleOffice />
      <CollageOffice />
    </Section>
  )
}

export default Office
