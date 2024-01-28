import MyPosts from "./MyPosts.jsx";
import { actions } from "../../../redux/profileReducer.ts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost: actions.addPostActionCreator,
  updateNewPostText: actions.updateNewPostTextActionCreator,
  deletePost: actions.deletePostActionCreator,
  editPost: actions.editPostActionCreator,
})(MyPosts);

export default MyPostsContainer;
