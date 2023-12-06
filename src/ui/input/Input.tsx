import React from "react";
import { InputWrapper, StyledInput, StyledLabel } from "./Input.styles";

interface IStyledInput {
  id: string
  type: "text" | "number" | "email"
  name: string
  value: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  label?: string
  required?: boolean
}

const Input: React.FC<IStyledInput> = ({
  id,
  type,
  name,
  value,
  onChange,
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