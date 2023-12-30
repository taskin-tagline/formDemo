import { email, password } from "../../utils/constant";

export const welcomeHead = "Welcome Back";

export const formPath = {
  parent: "login",
};

export const submitBtnText = "Login";

export const linkText = "Forgot Password?";

export const attribute = [
  {
    name: "email",
    label: "Email",
    placeholder: "eg. example@gmail.com",
    type: "email",
    variant: "outlined",
    isRequired: true,
    pattern: email,
    error: ["Email is required", "Invalid email"],
    gridXs: 12,
  },
  {
    name: "password",
    label: "Password",
    placeholder: "............",
    type: "password",
    variant: "outlined",
    isRequired: true,
    pattern: password,
    error: [
      "Password is required",
      "Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters",
    ],
    gridXs: 12,
  },
];

export const defaultValues = {
  email: "",
  password: "",
};
