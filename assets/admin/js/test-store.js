import {createStore, combineReducers, applyMiddleware} from 'redux';
import counterReducer from './reducers/counterReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default  createStore(combineReducers({counterReducer}), applyMiddleware(logger, thunk));
