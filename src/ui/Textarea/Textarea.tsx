import { ChangeEvent, FocusEvent, useRef } from 'react'
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
  const inputRef = useRef<HTMLTextAreaElement | null>(null)
  const handleWrapperClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <TextareaWrapper onClick={handleWrapperClick}>
      <TextareaLabel>
        <textarea
          ref={inputRef}
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
