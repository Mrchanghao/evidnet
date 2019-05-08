import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas';
import rootReducer from '../reducers';


const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ));
  sagaMiddleware.run(rootSaga)
  return store;
};

const store = configureStore();

export default store;