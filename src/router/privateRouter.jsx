import PageLayout from "../components/PageLayout/PageLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import User from "../pages/user/User";

// create private router
const privateRouter = [
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <User />,
      },
    ],
  },
];

// export private router
export default privateRouter;
