import useStore from "hooks/useStore";
import { observer } from "mobx-react";

import AuthorizedRouting from "./AuthorizedRouting";
import UnauthorizedRouting from "./UnauthorizedRouting";

const AppRouting = observer(() => {
  const { authStore } = useStore();

  const { isAuthorized } = authStore;
  if (isAuthorized) {
    return <AuthorizedRouting />;
  }
  return <UnauthorizedRouting />;
});

export default AppRouting;
