import { all} from 'redux-saga/effects'
import watcherPosts from './postsSaga';
import watcherPost from './postSaga';
import watcherDelete from './deleteSaga';
import watcherSubmit from './createSaga';


function* rootSaga() {
  // yield fork(watcherPosts)
  // yield fork(watcherPost)
  yield all([
    watcherPosts(),
    watcherPost(),
    watcherDelete(),
    watcherSubmit()
  ])
};

export default rootSaga;