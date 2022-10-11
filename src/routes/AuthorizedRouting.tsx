import { AuthorizedRoutes } from "constants/routes";
import { MainLayout } from "Layouts";
import { observer } from "mobx-react";
import { Dashboard } from "pages";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: AuthorizedRoutes.DASHBOARD,
        element: <Dashboard />,
      },
      { path: "*", element: <Navigate to={AuthorizedRoutes.DASHBOARD} /> },
    ],
  },
]);

const AuthorizedRouting = observer(() => {
  return <RouterProvider router={router} />;
});

export default AuthorizedRouting;
