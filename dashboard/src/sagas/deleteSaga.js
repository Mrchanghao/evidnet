import {takeEvery, call, put} from 'redux-saga/effects'
import { DELETE_POST, FETCH_POSTS, DELETE_POST_SUCCESS } from '../actions/types';
import axios from 'axios';
import {ROOT_URL, API_KEY} from '../config/index';

function* deletePost({id}) {
  try {
    yield call(axios.delete, `${ROOT_URL}/api/posts/${id}${API_KEY}`);

    yield put({type: DELETE_POST_SUCCESS})
    yield put({type: FETCH_POSTS})
  } catch (error) {
    console.log(error.message)
  }
}

function* watcherDelete() {
  yield takeEvery(DELETE_POST, deletePost);
};

export default watcherDelete;