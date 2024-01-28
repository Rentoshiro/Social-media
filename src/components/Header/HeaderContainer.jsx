import { connect } from "react-redux";
import Header from "./Header";
import React, { useEffect } from "react";
import { loginUser, logout } from "../../redux/authReducer.ts";

const HeaderContainer = (props) => {
  useEffect(() => {
    props.loginUser();
  }, [props.isAuth]);

  return <Header {...props} />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photo: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, { loginUser, logout })(HeaderContainer);
