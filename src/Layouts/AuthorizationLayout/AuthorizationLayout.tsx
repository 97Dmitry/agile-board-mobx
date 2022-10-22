import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "components";

const AuthorizationLayout = () => {
  return (
    <Root>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Root>
  );
};

export default AuthorizationLayout;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`;

const Main = styled.main`
  flex-grow: 1;
  margin-top: -${({ theme: { variables } }) => variables.desktopHeader};
`;
