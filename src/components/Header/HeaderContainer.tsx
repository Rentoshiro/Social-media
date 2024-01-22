import { connect } from "react-redux";
import Header from "./Header.tsx";
import React, { useEffect } from "react";
import { loginUser, logout } from "../../redux/authReducer.ts";
import { AppStateType } from "../../redux/redux-store.ts";

type HeaderContainerProps = {
  isAuth: boolean;
  login: string | null;
  loginUser: () => void;
  logout: () => void;
};

const HeaderContainer: React.FC<HeaderContainerProps> = (props) => {
  useEffect(() => {
    props.loginUser();
  }, [props.isAuth]);

  return <Header {...props} />;
};

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { loginUser, logout })(HeaderContainer);
