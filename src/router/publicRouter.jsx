import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// create public router
const publicRouter = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

// export public router
export default publicRouter;
