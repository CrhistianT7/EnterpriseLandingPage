import { useEffect, useState } from 'react'
import { useAllPrismicDocumentsByType } from '@prismicio/react'

import TeamMemberCard from 'components/AboutUs/Founders/TeamMemberCard/TeamMemberCard'
import { MembersWrapper } from 'pages/AboutUs/AboutUs.styles'
import Section from 'ui/Section/Section'
import { TitleFounders } from './TitleFounders/TitleFounders'

interface IFounder {
  id: string
  name: string
  position: string
  image: string
  quote: string
  website_url?: string
  github_url?: string
}

export const Founders: React.FC = () => {
  const [founders, { state }] = useAllPrismicDocumentsByType('founders', {
    lang: 'en-us',
  })

  const [founderMembers, setFounderMembers] = useState<Array<IFounder>>([])

  useEffect(() => {
    founders?.map((founder) => {
      const newFounder: IFounder = {
        id: founder.uid || '',
        name: founder.data.founder[0]?.text,
        position: founder.data.position[0]?.text,
        image: founder.data.picture.url,
        quote: founder.data.quote[0]?.text,
        github_url: founder.data.github.url,
      }
      setFounderMembers((prev) => [...prev, newFounder])
    })
  }, [founders])

  return (
    <Section size="lg" type="margin">
      <TitleFounders />
      <MembersWrapper>
        {state === 'loading' ? (
          <p>Loading...</p>
        ) : (
          founderMembers.map((member) => {
            return <TeamMemberCard key={member.id} {...member} />
          })
        )}
      </MembersWrapper>
    </Section>
  )
}

export default Founders
