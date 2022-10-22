import useStore from "hooks/useStore";
import { observer } from "mobx-react";
import styled from "styled-components";

const Dashboard = observer(() => {
  const { authStore } = useStore();
  return <Root onClick={authStore.logout}>Logout</Root>;
});

export default Dashboard;

const Root = styled.div``;
