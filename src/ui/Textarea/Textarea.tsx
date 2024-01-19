import { ChangeEvent } from 'react'

import { StyledLabel, StyledTextarea, TextareaWrapper } from './Textarea.styles'

interface IStyledTextarea {
  label: string
  name: string
  placeholder: string
  id: string
  value?: string
  required: boolean
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: React.FC<IStyledTextarea> = ({
  label,
  name,
  placeholder,
  id,
  value,
  onChange,
  required = true,
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
        required={required}
        rows={10}
        cols={3}
      />
    </TextareaWrapper>
  )
}

export default Textarea
