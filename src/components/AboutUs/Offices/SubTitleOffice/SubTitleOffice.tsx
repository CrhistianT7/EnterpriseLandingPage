import { ContainerSubTitleOffice } from './SubTitleOffice.style'
import useIntlMessages from 'hooks/useIntlMessages'

const SubTitleOffice = () => {
  const intl = useIntlMessages()
  return (
    <ContainerSubTitleOffice>
      <p>{intl('about.us.offices.sub.title.collage')}</p>
      <h3>
        {intl('about.us.offices.title.collage')}
        <span className="sub-title-point">.</span>
      </h3>
    </ContainerSubTitleOffice>
  )
}

export default SubTitleOffice
