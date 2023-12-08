import React from "react";
import { StyledContainer } from "./container.styles";

interface IContainer {
  size: "sm" | "md" | "lg" | "xl";
  className?: string,
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({
  size,
  children,
  className
}) => {
  return <StyledContainer size={size} className={className}>{children}</StyledContainer>;
};

export default Container;
