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
        color: ${colors.white.main};
        background-color: ${colors.secondary.main};

        &:focus {
          outline: 2px solid ${colors.secondary.focus};
        }

        &:active {
          outline: none;
        }
      `;
    case "secondary":
      return `
        color: ${colors.secondary.main};
        background-color: ${colors.white.main};
        outline: 1px solid ${colors.secondary.main};

        &:focus {
          border: none;
          outline: 2px solid ${colors.secondary.focus};
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
  color: ${colors.white.main};
  font-size: 16px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  line-height: 100%;
  cursor: pointer;
  height: fit-content;
  width: ${({ isfullwidth }) => (isfullwidth ? "100%" : "fit-content")};

  ${(props) => typeStyles(props.type)}
  ${(props) => sizeStyles(props.size!)}

  &:hover {
    background-color: ${colors.secondary.hover};
    outline: none;
  }
`;
