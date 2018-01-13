import { combineReducers } from 'redux';

import apiError from './apiError';
import list from './list';
import stories from './stories';
import modalHref from './modalHref';
import chosenStory from './chosenStory';

const reducer = combineReducers({
  apiError,
  list,
  stories,
  modalHref,
  chosenStory
});
export default reducer;
