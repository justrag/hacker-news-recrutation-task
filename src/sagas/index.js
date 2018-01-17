import { takeLatest, takeEvery } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import {
  getListSuccess,
  getListFailure,
  getStorySuccess,
  getStoryFailure,
  getListRequest,
  getStoryRequest
} from '../actions/';
import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
  GET_STORY_REQUEST,
  GET_STORY_SUCCESS,
  GET_STORY_FAILURE
} from '../constants/';

const getJson = url => fetch(url).then(resp => resp.json());

function* loadStory({ id }) {
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
    yield list.map(id => put(getStoryRequest(id)));
  } catch (error) {
    yield put(getListFailure(error));
  }
}

function* watchGetList() {
  yield takeLatest(GET_LIST_REQUEST, loadList);
}

function* watchGetStory() {
  yield takeEvery(GET_STORY_REQUEST, loadStory); // passes intercepted action as param to loadStory
}

export default function* rootSaga() {
  yield [loadList(), watchGetList(), watchGetStory()];
}
