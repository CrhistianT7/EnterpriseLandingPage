import { IQuestionProps } from 'types/components/services'
import freenlance from '../../../assets/images/imgService/freenlance.svg'
import {
  TitleQuestion,
  TitleResponse,
  WrapperQuestion,
  WrapperQuestionService,
} from './Question.style'

export const Question: React.FC<IQuestionProps> = ({
  questionService,
  responseService,
}) => {
  return (
    <WrapperQuestion type="padding" size="sm">
      <WrapperQuestionService>
        <TitleQuestion>
          <span className="title-question-service">{questionService}</span>
        </TitleQuestion>
        <TitleResponse>{responseService}</TitleResponse>
      </WrapperQuestionService>
      <img
        src={freenlance}
        alt="person-freelance"
        className="img-question-service"
      />
    </WrapperQuestion>
  )
}

export default Question
