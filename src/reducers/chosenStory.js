import { CHOOSE_STORY } from '../constants/';

const chosenStory = (state = false, { type, id }) => {
  switch (type) {
    case CHOOSE_STORY:
      return id;
    default:
      return state;
  }
};

export default chosenStory;
