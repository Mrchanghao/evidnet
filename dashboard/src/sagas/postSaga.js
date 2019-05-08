import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {ROOT_URL, API_KEY} from '../config/index';
import { FETCH_POST_SUCCESS, FETCH_POST_FAIL, FETCH_POST } from '../actions/types';

function* fetchPost({id}) {
  try {
    const {data} = yield call(axios.get, `${ROOT_URL}/api/posts/${id}${API_KEY}`);
    yield put({type: FETCH_POST_SUCCESS, post: data})
  
  } catch (error) {
    yield put({type: FETCH_POST_FAIL, error: error.message})  
  }

};


function* watcherPost() {
  yield takeEvery(FETCH_POST, fetchPost);
};

export default watcherPost;
