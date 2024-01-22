import { actions } from "../../redux/dialogsReducer.ts";
import Dialogs from "./Dialogs.tsx";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect.tsx";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store.ts";

type MapStateToPropsType = {
  messagesData: any;
};

type MapDispatchToPropsType = {
  updateNewMessageBody: (text: any) => void;
  sendMessage: (text: any) => void;
};

type DialogsContainerProps = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    messagesData: state.messagesData,
  };
};

const mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
  return {
    updateNewMessageBody: (text: any) => {
      dispatch(actions.updateNewMessageBodyCreator(text));
    },
    sendMessage: (text: any) => {
      dispatch(actions.sendMessage(text));
    },
  };
};

export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, null, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAuthRedirect
)(Dialogs) as React.ComponentType;
