import {createStore, combineReducers, applyMiddleware} from 'redux';
import albumReducer from './reducers/albumReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
export default  createStore(combineReducers({
    albums: albumReducer
}), composeWithDevTools(applyMiddleware(logger, thunk)));