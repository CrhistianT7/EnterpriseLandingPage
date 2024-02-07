import useIntlMessages from 'hooks/useIntlMessages'
import {
  ContentDescriptionAboutUs,
  DescriptionAboutUs,
} from './Description.style'

const Description = () => {
  const intl = useIntlMessages()

  return (
    <DescriptionAboutUs>
      <p>{intl('about.us.binland.information.sub.title')}</p>
      <h3>
        {intl('about.us.binland.information.title')}
        <span className="description-point">.</span>
      </h3>
      <ContentDescriptionAboutUs>
        {intl('about.us.binland.information.description')}
      </ContentDescriptionAboutUs>
      <ContentDescriptionAboutUs>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam
        esse, ratione voluptas quas amet commodi modi rerum deserunt atque!
      </ContentDescriptionAboutUs>
    </DescriptionAboutUs>
  )
}

export default Description
