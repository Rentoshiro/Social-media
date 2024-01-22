import { connect } from "react-redux";
import Login from "./Login.tsx";
import { login, logout } from "../../redux/authReducer.ts";
import { AppStateType } from "../../redux/redux-store.ts";

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    // login: state.auth.login,
    errorMessage: state.auth.errorMessage,
    capthaUrl: state.auth.capthaUrl,
  };
};

export default connect(mapStateToProps, { login })(Login);
