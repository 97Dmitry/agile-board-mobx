import useStore from "hooks/useStore";
import { observer } from "mobx-react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { InputTextField } from "components";
import Button from "../../../../components/ui/Button/Button";

const SingIn = observer(() => {
  const { authStore } = useStore();

  const { control, handleSubmit, watch, formState, setError, clearErrors } = useForm<FormValues>({
    defaultValues: { login: "", password: "" },
    mode: "onChange",
  });

  const submitHandler = (values: FormValues) => {
    authStore.login(values);
  };

  return (
    <Root>
      <Form>
        <TitleWrapper>
          <Title>LOGIN /</Title>
          <SingUpButton type="button">Sign Up</SingUpButton>
        </TitleWrapper>

        <InputTextField name="login" control={control} placeholder="Login" />
        <InputTextField name="password" type="password" control={control} placeholder="Password" />
        <Button onClick={handleSubmit(submitHandler)} text="Submit" variant="primary" />
      </Form>
    </Root>
  );
});

interface FormValues {
  login: string;
  password: string;
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Form = styled.form``;

const TitleWrapper = styled.div`
  display: flex;
`;

const Title = styled.h1`
  color: ${({
    theme: {
      colors: { color1 },
    },
  }) => color1};
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  margin-right: 10px;
`;

const SingUpButton = styled.button`
  font-size: 20px;
  line-height: 23px;
  color: ${({
    theme: {
      colors: { color3 },
    },
  }) => color3};
`;

export default SingIn;
