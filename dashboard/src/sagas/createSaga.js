import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {ROOT_URL, API_KEY} from '../config/index';
import { CREATE_POST_SUCCESS, CREATE_POST_FAIL, CREATE_POST } from '../actions/types';


async function apiCall (values) {
  try {
    let {data} = await axios.post(`${ROOT_URL}/api/posts/${API_KEY}`, values);
    return {data} 

  } catch (error) {
    console.log(error)
  }
}

function* createPost(action) {
  try {
    let {data} = yield call(apiCall, {...action.values});
    
    yield put({type: CREATE_POST_SUCCESS, post: data})
  } catch (error) {
    yield put({type: CREATE_POST_FAIL, error: error.message})  
  }
  
}


function* watcherSubmit() {
  yield takeEvery(CREATE_POST, createPost);
};

export default watcherSubmit;
