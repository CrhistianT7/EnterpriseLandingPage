import React from "react";
import { InputWrapper, StyledInput, StyledLabel } from "./Input.styles";

interface IStyledInput {
  id: string
  type?: "text" | "number" | "email" | "password" 
  name?: string
  value: React.HTMLInputTypeAttribute
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  label?: string
  required?: boolean
}

const Input: React.FC<IStyledInput> = ({
  id,
  type="text",
  name,
  onChange,
  value,
  placeholder,
  label,
  required = false,
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
        placeholder={placeholder}
        required={required}
      />
    </InputWrapper>
  );
}

export default Input;