import { GET_STORY_SUCCESS } from '../constants/';

const stories = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_STORY_SUCCESS:
      return { ...state, [payload.id]: payload };
    default:
      return state;
  }
};
export default stories;
