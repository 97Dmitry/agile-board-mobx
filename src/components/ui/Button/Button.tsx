import styled from "styled-components";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isFullWight?: boolean;
  variant: ButtonVariant;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button: FC<ButtonProps> = ({
  text,
  isFullWight = false,
  variant,
  type = "button",
  ...rest
}) => {
  return (
    <Root $variant={variant} $isFullWight={isFullWight} type={type} {...rest}>
      {text}
    </Root>
  );
};

type ButtonVariant = "primary" | "secondary";

interface RootProps {
  $variant: ButtonVariant;
  $isFullWight: boolean;
}

const Root = styled.button<RootProps>`
  background: ${({ theme: { colors } }) => colors.color4};
  border-radius: 15px;
  color: ${({ theme: { colors } }) => colors.color5};
  width: ${({ $isFullWight }) => ($isFullWight ? "100%" : "142px")};
  height: 44px;
`;

export default Button;
