import {
  GET_LIST_REQUEST,
  GET_LIST_FAILURE,
  GET_STORY_FAILURE
} from '../constants/';
const apiError = (state = false, { type, apiError }) => {
  switch (type) {
    case GET_LIST_REQUEST:
      return false;
    case GET_LIST_FAILURE || GET_STORY_FAILURE:
      return apiError;
    default:
      return state;
  }
};
export default apiError;
