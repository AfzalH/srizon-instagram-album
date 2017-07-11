import {createStore, combineReducers, applyMiddleware} from 'redux';
import counterReducer from './reducers/counterReducer';
import settingsReducer from './reducers/settingsReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default  createStore(combineReducers({
    counterReducer,
    settings: settingsReducer
}), applyMiddleware(logger, thunk));