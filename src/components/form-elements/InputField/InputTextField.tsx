import { FieldValues, useController, UseControllerProps } from "react-hook-form";
import Input, { InputProps } from "components/ui/Input/Input";
import styled from "styled-components";

export type InputTextFieldProps<T extends FieldValues> = UseControllerProps<T> & InputProps;

const InputTextField = <T extends FieldValues>(props: InputTextFieldProps<T>) => {
  const { name, control, rules, ...rest } = props;
  const { field, fieldState } = useController<T>({
    name,
    control,
    rules,
  });

  const handleChange = (value: string) => {
    field.onChange(value);
  };

  return (
    <Root>
      <StyledInput
        {...rest}
        value={field.value}
        onChange={(event) => handleChange(event.target.value)}
        hasError={!!fieldState.error}
      />
      <ErrorMessage>{fieldState.error && fieldState.error.message}</ErrorMessage>
    </Root>
  );
};

const Root = styled.div`
  padding-top: 6px;
`;

const StyledInput = styled(Input)`
  width: 100%;
  margin-bottom: 8px;
`;

const ErrorMessage = styled.div``;

export default InputTextField;
