import styled from "styled-components";
import { colors } from "../../styles/colors";

const red = {
  50: "#FFF0F3",
  100: "#FFDEE4",
  200: "#FFC2CC",
  300: "#FF98A9",
  400: "#FF5C78",
  500: "#FF2A4E",
  600: "#F80A32",
  700: "#D20427",
  800: "#AC0824",
  900: "#8E0E24",
  950: "#4E010E",
};

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 10px;
`;

export const StyledLabel = styled.label`
  color: ${colors.gray};
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  font-weight: 500;
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${red[300]};
  border-radius: 6px;
  background-color: ${colors.white};
  
  &:hover,
  &:focus {
    border-color: ${red[700]};
  }

  &:focus {
    outline: none;
    border-color: ${red[500]};
    box-shadow: 0 0 5px ${red[500]};
  }

  &:active,
  &:focus:active {
    outline: none;
    border-color: ${red[700]};
  }
`;
