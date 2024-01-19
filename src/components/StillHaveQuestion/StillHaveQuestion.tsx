import { useNavigate } from 'react-router-dom'

import useIntlMessages from 'hooks/useIntlMessages'
import Button from 'ui/Button/Button'
import {
  ContainerHaveQuestion,
  HaveQuestion,
  SupportChat,
  TitleHaveQuestion,
} from './StillHaveQuestion.styles'

const StillHaveQuestion: React.FC = () => {
  const intl = useIntlMessages()
  const navigate = useNavigate()

  const goToContactUs = () => {
    navigate('/contact-us')
  }

  return (
    <ContainerHaveQuestion>
      <HaveQuestion>
        <TitleHaveQuestion>
          {intl('frequently.asked.questions.still.have.questions')}
        </TitleHaveQuestion>
        <SupportChat>
          {intl('frequently.asked.questions.still.have.questions.description')}
        </SupportChat>
      </HaveQuestion>
      <Button type="secondary" onClick={goToContactUs}>
        {intl('frequently.asked.questions.still.have.questions.button')}
      </Button>
    </ContainerHaveQuestion>
  )
}

export default StillHaveQuestion
