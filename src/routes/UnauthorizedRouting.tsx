import { AuthorizationLayout } from "Layouts";
import { observer } from "mobx-react";
import { Authorization } from "pages";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { UnauthorizedRoutes } from "../constants/routes";

const router = createBrowserRouter([
  {
    element: <AuthorizationLayout />,
    children: [
      {
        path: UnauthorizedRoutes.SIGN_IN,
        element: <Authorization />,
        index: true,
      },
      {
        path: UnauthorizedRoutes.SIGN_UP,
        element: <Authorization />,
      },
      { path: "*", element: <Navigate to={UnauthorizedRoutes.SIGN_IN} /> },
    ],
  },
]);

const UnauthorizedRouting = observer(() => {
  return <RouterProvider router={router} />;
});

export default UnauthorizedRouting;
