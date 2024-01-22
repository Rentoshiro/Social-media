import MyPosts from "./MyPosts.tsx";
import { actions } from "../../../redux/profileReducer.ts";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost: actions.addPostActionCreator,
  updateNewPostText: actions.updateNewPostTextActionCreator,
  deletePost: actions.deletePostActionCreator,
})(MyPosts);

export default MyPostsContainer;
