import React from "react";
import LoginForm from "./LoginForm.tsx";
import { Navigate } from "react-router-dom";

type LoginType = {
  isAuth: boolean;
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captha: string
  ) => void;
  errorMessage: string | null;
  capthaUrl: string | null;
};

function Login(props: LoginType) {
  console.log(props);
  if (props.isAuth) {
    return <Navigate to={"/profile"}></Navigate>;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm {...props} />
    </div>
  );
}

export default Login;
