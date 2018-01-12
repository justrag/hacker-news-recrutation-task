import { combineReducers } from 'redux';
import {
	GET_LIST_SUCCESS,
	GET_LIST_FAILURE,
	GET_STORY_SUCCESS,
	SHOW_MODAL,
	HIDE_MODAL,
	CHOOSE_STORY
} from './constants';

export const chosenStory = (state = false, { type, id }) => {
	switch (type) {
		case CHOOSE_STORY:
			return id;
		default:
			return state;
	}
};

const modalHref = (state = false, { type, href }) => {
	switch (type) {
		case SHOW_MODAL:
			return href;
		case HIDE_MODAL:
			return false;
		default:
			return state;
	}
};

const apiError = (state = false, { type, apiError }) => {
	switch (type) {
		case GET_LIST_SUCCESS:
			return false;
		case GET_LIST_FAILURE:
			return apiError;
		default:
			return state;
	}
};

const list = (state = [], { type, payload }) => {
	switch (type) {
		case GET_LIST_SUCCESS:
			return payload;
		default:
			return state;
	}
};

const stories = (state = {}, { type, payload }) => {
	switch (type) {
		case GET_STORY_SUCCESS:
			return { ...state, [payload.id]: payload };
		default:
			return state;
	}
};

const reducer = combineReducers({
	apiError,
	list,
	stories,
	modalHref,
	chosenStory
});
export default reducer;
