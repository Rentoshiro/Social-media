import { InferActionsTypes } from "./redux-store";

const SEND_MESSAGE = "SEND_MESSAGE";

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  id: number;
  message: string;
};

const initialState = {
  nameData: [
    { id: 1, name: "Some name1" },
    { id: 2, name: "Some name2" },
    { id: 3, name: "Some name3" },
    { id: 4, name: "Some name4" },
    { id: 5, name: "Some name5" },
  ] as Array<DialogType>,
  dialogsData: [
    { id: 1, message: "QQ" },
    { id: 2, message: "QQ" },
    { id: 3, message: "QQ" },
    { id: 4, message: "QQ" },
    { id: 5, message: "QQ" },
  ] as Array<MessageType>,
  dialogText: "new Dialog",
};

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;

const dialogsReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  if (action.type === "UPDATE_NEW_MESSAGE_BODY") {
    const newState = { ...state };
    newState.dialogText = action.dialogText;
    return newState;
  } else if (action.type === SEND_MESSAGE) {
    const newPost = {
      id: Math.random(),
      message: action.someMessage,
    };
    const newStateD = { ...state };
    newStateD.dialogsData = [...state.dialogsData];
    newStateD.dialogsData.push(newPost);
    newStateD.dialogText = "";
    return newStateD;
  }
  return state;
};

export const actions = {
  sendMessage: (text: any) =>
    ({
      type: SEND_MESSAGE,
      someMessage: text.current.value,
    } as const),
  updateNewMessageBodyCreator: (text: any) => {
    return {
      type: "UPDATE_NEW_MESSAGE_BODY",
      someText: text.current.value,
    };
  },
};

export default dialogsReducer;
