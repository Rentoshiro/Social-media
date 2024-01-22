import { profileAPI } from "../api/profile-api.ts";
import {
  postType,
  profileType,
  contactsType,
  photoType,
} from "../types/types.ts";
import { BaseThunkType, InferActionsTypes } from "./redux-store.ts";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_IMAGE = "UPDATE_IMAGE";

let initialState = {
  posts: [
    { id: 1, message: "Hi number 1", likesCount: 11 },
    { id: 2, message: "Hi number 2", likesCount: 12 },
  ] as Array<postType>,
  newPostText: "new Post",
  profile: null as profileType | null,
  status: "",
};

export type initialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType>;

const profileReducer = (
  state = initialState,
  action: ActionsType
): initialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: Math.random(),
        message: action.newMessage,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }

    case DELETE_POST:
      const updatedPosts = state.posts.filter((p) => p.id !== action.postId);
      return {
        ...state,
        posts: updatedPosts,
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case UPDATE_IMAGE:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: {
            ...state.profile.photos,
            large: action.URLphoto,
          },
        } as profileType,
      };

    default:
      return state;
  }
};

export const actions = {
  addPostActionCreator: (text: string) =>
    ({
      type: ADD_POST,
      newMessage: text,
    } as const),
  setUserProfile: (profile: profileType) =>
    ({
      type: SET_USER_PROFILE,
      profile,
    } as const),
  setStatus: (status: string) =>
    ({
      type: SET_STATUS,
      status,
    } as const),
  deletePostActionCreator: (postId: number) =>
    ({
      type: DELETE_POST,
      postId,
    } as const),
  setImage: (URLphoto: string) =>
    ({
      type: UPDATE_IMAGE,
      URLphoto,
    } as const),
  updateNewPostTextActionCreator: (text: string) =>
    ({
      type: UPDATE_NEW_POST_TEXT,
      newText: text,
    } as const),
};

export const showProfile =
  (userId: number): ThunkType =>
  async (dispatch: any) => {
    if (!userId) {
      return;
    }
    const response = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(response.data));
  };

export const getStatus =
  (userId: number): ThunkType =>
  async (dispatch) => {
    if (!userId) {
      return;
    }
    const response = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(response.data));
  };

export const updateStatus =
  (status: string): ThunkType =>
  async (dispatch) => {
    try {
      const response = await profileAPI.updateStatus(status);
      if (response.data.resultCode === 0) {
        dispatch(actions.setStatus(status));
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

export const updateImage =
  (photo: any): ThunkType =>
  async (dispatch) => {
    const response = await profileAPI.updatePhoto(photo);
    dispatch(actions.setImage(response.data.data.photos.large));
  };

export const saveProfile =
  (profile: profileType): ThunkType =>
  async (dispatch, state: any) => {
    const userId = state().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    dispatch(showProfile(userId));
  };

export default profileReducer;
