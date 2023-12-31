import styled from "styled-components";

interface IStyledSection {
  type: "margin" | "padding";
  size: "sm" | "md" | "lg" | "xl";
}

const sizeStyles = (size: string) => {
  switch (size) {
    case "sm":
      return `32px`;
    case "md":
      return `48px`;
    case "lg":
      return `96px`;
    case "xl":
      return `144px`;
    default:
      break;
  }
};

export const StyledSection = styled.section<IStyledSection>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;

  ${(props) =>
    props.type === "margin"
      ? `margin: ${sizeStyles(props.size)}`
      : `padding: ${sizeStyles(props.size)}`}
`;
