import { meStore } from "store/me.store";

const SingIn = () => {
  return <div onClick={() => meStore.login()}>SingIn</div>;
};

export default SingIn;
