import * as React from "react";
import { StyledContainer } from "./container.styles";

interface IContainer {
  size: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({
  size,
  children,
}): React.ReactElement => {
  return <StyledContainer size={size}>{children}</StyledContainer>;
};

export default Container;
