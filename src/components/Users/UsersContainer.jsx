import UsersAPIComponent from "./UsersAPIComponent";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(UsersAPIComponent);
