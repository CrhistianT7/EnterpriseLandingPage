import { StyledButton } from "./Button.styles";

interface IButton {
  type: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isFullWidth?: boolean;
}

const Button: React.FC<IButton> = ({
  size = "md",
  children,
  leftIcon,
  rightIcon,
  isFullWidth,
  ...props
}) => {
  return (
    <StyledButton {...props} size={size} isfullwidth={isFullWidth}>
      {leftIcon}
      {children}
      {rightIcon}
    </StyledButton>
  );
};

export default Button;
