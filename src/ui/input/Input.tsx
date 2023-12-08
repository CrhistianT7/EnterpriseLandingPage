import React from "react";
import { InputWrapper, StyledInput, StyledLabel } from "./Input.styles";
import { ChangeEvent } from "react";

type Value = string | number | boolean | Date

interface IStyledInput {
  id: string
  type?: "text" | "number" | "email" | "password" 
  name?: string
  value: Value
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
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
        value={value as string}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </InputWrapper>
  );
}

export default Input;