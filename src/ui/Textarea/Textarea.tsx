import { ChangeEvent, FocusEvent } from 'react'

import { StyledLabel, StyledTextarea, TextareaWrapper } from './Textarea.styles'

interface IStyledTextarea {
  label: string
  name: string
  placeholder: string
  id: string
  value?: string
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: React.FC<IStyledTextarea> = ({
  label,
  name,
  placeholder,
  id,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <TextareaWrapper>
      <StyledLabel htmlFor={id || name}>{label}</StyledLabel>
      <StyledTextarea
        name={name}
        placeholder={placeholder}
        id={id || name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </TextareaWrapper>
  )
}

export default Textarea
