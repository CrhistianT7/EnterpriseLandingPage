import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import {
  AnswerFAQ,
  Question,
  QuestionWrapper,
  Response,
} from './FaqCard.styles'

interface IFaqCardProps {
  question: string
  answer: string
}

const FaqCard: React.FC<IFaqCardProps> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <QuestionWrapper>
      <Question onClick={() => setShowAnswer(!showAnswer)}>
        <span>{question}</span>
        <div>
          {!showAnswer && <IoIosArrowDown size={20} />}
          {showAnswer && <IoIosArrowUp size={20} />}
        </div>
      </Question>
      {showAnswer && (
        <AnswerFAQ>
          <Response>{answer}</Response>
        </AnswerFAQ>
      )}
    </QuestionWrapper>
  )
}

export default FaqCard
