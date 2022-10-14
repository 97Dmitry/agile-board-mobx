import useStore from "hooks/useStore";
import { observer } from "mobx-react";

const Dashboard = observer(() => {
  const { authStore } = useStore();
  return <div onClick={authStore.logout}>Logout</div>;
});

export default Dashboard;
