import { FocusEvent, ChangeEvent } from 'react'

import { InputWrapper, StyledInput, StyledLabel } from './Input.styles'

interface IStyledInput {
  id: string
  type?: 'text' | 'number' | 'email' | 'password'
  name?: string
  value: string | number 
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  placeholder?: string
  label?: string
}

const Input: React.FC<IStyledInput> = ({
  id,
  type = 'text',
  name,
  onChange,
  onBlur,
  value,
  placeholder = '',
  label,
}) => {
  return (
    <InputWrapper>
      {label && <StyledLabel htmlFor={id || name}>{label}</StyledLabel>}
      <StyledInput
        id={id || name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </InputWrapper>
  )
}

export default Input
