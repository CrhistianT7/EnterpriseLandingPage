import * as React from "react";
import { StyledSection } from "./section.styles";

interface ISection {
  type: "margin" | "padding";
  size: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

const Section: React.FC<ISection> = ({
  type,
  size,
  children,
}): React.ReactElement => {
  return (
    <StyledSection type={type} size={size}>
      {children}
    </StyledSection>
  );
};

export default Section;
