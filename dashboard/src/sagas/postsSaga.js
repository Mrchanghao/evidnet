import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {ROOT_URL, API_KEY} from '../config/index';
import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL, FETCH_POSTS } from '../actions/types';

function* fetchPosts() {
  try {
    const {data} = yield call(axios.get, `${ROOT_URL}/api/posts${API_KEY}`);

    yield put({type: FETCH_POSTS_SUCCESS, posts: data})

  } catch (error) {
    yield put({type: FETCH_POSTS_FAIL, error: error.message})
  }
};

function* watcherPosts() {
  yield takeEvery(FETCH_POSTS, fetchPosts);
}

export default watcherPosts;