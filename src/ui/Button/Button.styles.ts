import styled from "styled-components";
import { colors } from "../../styles/colors";

interface IStyledButton {
  type: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  isfullwidth: boolean | undefined;
}

const typeStyles = (type: string) => {
  switch (type) {
    case "primary":
      return `
        color: ${colors.white};
        background-color: ${colors.primary.main};

        &:focus {
          outline: 2px solid ${colors.primary.body};
        }

        &:active {
          outline: none;
        }
      `;
    case "secondary":
      return `
        color: ${colors.primary.main};
        background-color: ${colors.white};
        outline: 1px solid ${colors.primary.main};

        &:focus {
          border: none;
          outline: 2px solid ${colors.primary.body};
        }
      `;
    default:
      break;
  }
};

const sizeStyles = (size: string) => {
  switch (size) {
    case "sm":
      return `
        padding: 8px 12px;
        font-size: 14px;
      `;
    case "lg":
      return `
        padding: 8px 12px;
        font-size: 18px;
      `;
    default:
      break;
  }
};

export const StyledButton = styled.button<IStyledButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: fit-content;
  width: ${({ isfullwidth }) => (isfullwidth ? "100%" : "fit-content")};

  ${(props) => typeStyles(props.type)}
  ${(props) => sizeStyles(props.size!)}

  &:hover {
    color: ${colors.white};
    background-color: ${colors.primary.body};
    outline: none;
  }
`;
