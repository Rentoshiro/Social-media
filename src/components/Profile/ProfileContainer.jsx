import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";
import Profile from "./Profile";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Profile);
