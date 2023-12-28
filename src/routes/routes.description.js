// import AuthLayout from "../presentation/layout/AuthLayout";
import Login from "../presentation/login";
import SignUp from "../presentation/signup";

const routes = [
  {
    path: "/login",
    element: <Login />,
    // children: [{ index: true, element: <Login /> }],
  },
  {
    path: "/signup",
    element: <SignUp />,
    // children: [{ index: true, element: <SignUp /> }],
  },
];

export default routes;
