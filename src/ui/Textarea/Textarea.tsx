import { ChangeEvent, FocusEvent, useRef, useEffect } from 'react'

import { TextareaLabel, TextareaWrapper } from './Textarea.styles'

interface IStyledTextarea {
  label: string
  name: string
  placeholder?: string
  id: string
  value?: string
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: React.FC<IStyledTextarea> = ({
  label,
  name,
  placeholder = '',
  id,
  value,
  onChange,
  onBlur,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const handleWrapperClick = () => {
    if (textAreaRef.current) {
      textAreaRef.current.focus()
    }
  }

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
    }
  }

  useEffect(resizeTextArea, [value])

  return (
    <TextareaWrapper onClick={handleWrapperClick}>
      <TextareaLabel>
        <textarea
          ref={textAreaRef}
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
        <span>{label}</span>
      </TextareaLabel>
    </TextareaWrapper>
  )
}

export default Textarea
