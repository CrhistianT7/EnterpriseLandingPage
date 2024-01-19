import styled from 'styled-components'

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #718096;
  border-radius: 8px;
  color: #101828;
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;

  &:hover {
    background: gray;
    cursor: pointer;
  }
`

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.375rem;
  background-color: #fff;
`

export const AnswerFAQ = styled.div`
  padding: 0.5rem;
  margin-top: 2px;
  border: 1px solid #718096;
  border-radius: 7px;
`

export const Response = styled.div`
  color: #616b7e;
  font-size: 16px;
  padding: 3px 10px;
`
