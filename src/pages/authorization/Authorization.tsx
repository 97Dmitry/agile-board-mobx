import { UnauthorizedRoutes } from "constants/routes";
import { useLocation } from "react-router-dom";

import { SingIn, SingUp } from "./components";

const Authorization = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === UnauthorizedRoutes.SIGN_IN && <SingIn />}
      {location.pathname === UnauthorizedRoutes.SIGN_UP && <SingUp />}
    </>
  );
};

export default Authorization;
