import { GET_STORY_REQUEST } from './constants';
import { call, put, fork } from 'redux-saga/effects';
import {
	getListSuccess,
	getListFailure,
	getStorySuccess,
	getStoryFailure
} from './actions';

const getJson = url => fetch(url).then(resp => resp.json());

function* loadStory(id) {
	try {
		const story = yield call(
			getJson,
			`https://hacker-news.firebaseio.com/v0/item/${id}.json`
		);
		yield put(getStorySuccess(story));
	} catch (error) {
		yield put(getStoryFailure(error));
	}
}

function* loadList() {
	try {
		const fullList = yield call(
			getJson,
			'https://hacker-news.firebaseio.com/v0/topstories.json'
		);
		const list = fullList.slice(0, 50);
		yield put(getListSuccess(list));
		yield list.map(id => fork(loadStory, id));
	} catch (error) {
		yield put(getListFailure(error));
	}
}

function* rootSaga() {
	//	yield [fork(loadList), takeLatest(GET_STORY_REQUEST, loadStory)];
	yield fork(loadList);
}

export default rootSaga;
