import styled from "styled-components";

interface ISelect {
  size?: "sm" | "md" | "lg";
}

const StyledSelect = styled.select``;

const Select: React.FC<ISelect> = () => {
  return <StyledSelect></StyledSelect>;
};

export default Select;
