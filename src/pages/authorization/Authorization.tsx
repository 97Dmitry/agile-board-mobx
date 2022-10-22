import { UnauthorizedRoutes } from "constants/routes";
import { useLocation } from "react-router-dom";

import { SingIn, SingUp } from "./components";
import styled from "styled-components";

const Authorization = () => {
  const location = useLocation();

  return (
    <Root>
      {location.pathname === UnauthorizedRoutes.SIGN_IN && <SingIn />}
      {location.pathname === UnauthorizedRoutes.SIGN_UP && <SingUp />}
    </Root>
  );
};

export default Authorization;

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
