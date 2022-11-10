import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

const Input: FC<InputProps> = ({
  type,
  name,
  success,
  hasError,
  disabled,
  readOnly,
  placeholder,
  ...rest
}) => {
  let _success = success;
  let _hasError = hasError;

  if (_success && _hasError) {
    _success = false;
    _hasError = false;
  }

  return (
    <Root>
      <StyledInput
        type={type}
        name={name}
        id={name}
        $hasError={_hasError}
        $success={_success}
        readOnly={readOnly}
        disabled={disabled}
        required
        {...rest}
      />
      <Label htmlFor={name} data-title={placeholder} title={placeholder} />
    </Root>
  );
};

export type InputType = "text" | "number" | "textarea" | "password";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  name?: string;
  disabled?: boolean;
  success?: boolean;
  hasError?: boolean;
  readOnly?: boolean;
  placeholder: string;
}

interface StyledInputProps {
  $hasError?: boolean;
  $success?: boolean;
}

const Root = styled.div`
  position: relative;
`;

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  line-height: 40px;
  padding: 0 15px;
  box-sizing: border-box;
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.input.text};
  border: 1px solid #ccc;
  border-radius: 8px;

  &:focus {
    outline: 0;
    border-color: ${({ theme: { colors } }) => colors.input.border};
  }

  &:focus + label::before,
  &:required:valid + label::before {
    line-height: 20px;
    font-size: 12px;
    top: -10px;
    background: ${({ theme: { colors } }) => colors.background};
    padding: 0 6px;
    left: 9px;
    color: ${({ theme: { colors } }) => colors.input.focusPlaceholderText};
  }
`;

const Label = styled.label`
  pointer-events: none;
  &:before {
    content: attr(title);
    position: absolute;
    top: 0;
    left: 15px;
    line-height: 40px;
    font-size: 14px;
    color: #777;
    transition: 300ms all;
  }
`;

export default Input;
