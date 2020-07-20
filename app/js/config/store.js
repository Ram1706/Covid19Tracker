import {createEpicMiddleware} from 'redux-observable';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootEpic from './rootEpic';
import rootReducer from './rootReducer';

const epicMiddleWare = createEpicMiddleware(rootEpic);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleWare)),
);

export default store;
