import useStore from "hooks/useStore";
import { observer } from "mobx-react";

const SingIn = observer(() => {
  const { authStore } = useStore();

  return <div onClick={() => authStore.login({ login: "admin", password: "123456" })}>SingIn</div>;
});

export default SingIn;
