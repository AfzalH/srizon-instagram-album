import {createStore, combineReducers, applyMiddleware} from 'redux';
import albumReducer from './reducers/albumReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
export default  createStore(combineReducers({
    albums: albumReducer
}), applyMiddleware(logger, thunk));