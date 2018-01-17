import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
  GET_STORY_REQUEST,
  GET_STORY_SUCCESS,
  GET_STORY_FAILURE,
  SHOW_MODAL,
  HIDE_MODAL,
  CHOOSE_STORY
} from '../constants/';

export const getListRequest = () => ({ type: GET_LIST_REQUEST });
export const getListSuccess = payload => ({ type: GET_LIST_SUCCESS, payload });
export const getListFailure = apiError => ({
  type: GET_LIST_FAILURE,
  apiError
});
export const getStoryRequest = id => ({ type: GET_STORY_REQUEST, id });
export const getStorySuccess = payload => ({
  type: GET_STORY_SUCCESS,
  payload
});
export const getStoryFailure = apiError => ({
  type: GET_STORY_FAILURE,
  apiError
});
export const chooseStory = id => ({ type: CHOOSE_STORY, id });
export const showModal = href => ({ type: SHOW_MODAL, href });
export const hideModal = () => ({ type: HIDE_MODAL });
