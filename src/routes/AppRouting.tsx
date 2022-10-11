import { observer } from "mobx-react";
import { meStore } from "store/me.store";

import AuthorizedRouting from "./AuthorizedRouting";
import UnauthorizedRouting from "./UnauthorizedRouting";

const AppRouting = observer(() => {
  const { isAuthorized } = meStore;
  if (isAuthorized) {
    return <AuthorizedRouting />;
  }
  return <UnauthorizedRouting />;
});

export default AppRouting;
