import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { getJson, loadStory, loadList } from '../../sagas/';
import {
  GET_STORY_SUCCESS,
  GET_LIST_SUCCESS,
  GET_STORY_REQUEST
} from '../../constants/';

describe('loadStory saga', () => {
  it('puts GET_STORY_SUCCESS on good fetch', () => {
    const id = 1410;
    return expectSaga(loadStory, id)
      .provide({
        call(effect, next) {
          // Check for the API call to return fake value
          if (effect.fn === getJson) {
            return { id, title: 'Koyaanisqatsi' };
          }
        }
      })
      .put({ type: GET_STORY_SUCCESS, payload: { id, title: 'Koyaanisqatsi' } })
      .run();
  });
});

describe('loadList saga', () => {
  it('puts GET_LIST_SUCCESS and GET_STORY_REQUESTs on good fetch', () => {
    const list = [1410, 1492, 1920];
    return expectSaga(loadList)
      .provide({
        call(effect, next) {
          // Check for the API call to return fake value
          if (effect.fn === getJson) {
            return list;
          }
        }
      })
      .put({ type: GET_LIST_SUCCESS, payload: list })
      .put({ type: GET_STORY_REQUEST, id: 1410 })
      .put({ type: GET_STORY_REQUEST, id: 1492 })
      .put({ type: GET_STORY_REQUEST, id: 1920 })
      .run();
  });
});
