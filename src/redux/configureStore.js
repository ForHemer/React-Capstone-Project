import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import zooReducer, { fetchZoosPI } from './zoo/zoo';

const reducer = combineReducers({
  zoo: zooReducer,

});

const elementStore = createStore(reducer, applyMiddleware(thunk, logger));
elementStore.dispatch(fetchZoosPI());

export default elementStore;
