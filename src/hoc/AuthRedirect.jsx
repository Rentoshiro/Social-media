import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export function withAuthRedirect(WrappedComponent) {
  const RedirectComponent = (props) => {
    const { isAuth, ...restProps } = props;

    if (!isAuth) return <Navigate to="/login" />;

    return <WrappedComponent {...restProps} />;
  };

  let ConnectedAuthRedirectComponent = connect(
    mapStateToPropsForRedirect,
    {}
  )(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}
