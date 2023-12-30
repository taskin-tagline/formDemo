import AuthLayout from "../presentation/layout/AuthLayout";
import Login from "../presentation/login";
import SignUp from "../presentation/signup";

const routes = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [{ index: true, element: <Login /> }],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [{ index: true, element: <Login /> }],
  },
  {
    path: "/signup",
    element: <AuthLayout />,
    children: [{ index: true, element: <SignUp /> }],
  },
];

export default routes;
