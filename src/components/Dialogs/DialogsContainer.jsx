import { actions } from "../../redux/dialogsReducer.ts";
import Dialogs from "./Dialogs.jsx";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    messagesData: state.messagesData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (text) => {
      dispatch(actions.updateNewMessageBodyCreator(text));
    },
    sendMessage: (text) => {
      dispatch(actions.sendMessage(text));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
