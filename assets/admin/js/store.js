import {createStore, combineReducers, applyMiddleware} from 'redux';
import settingsReducer from './reducers/settingsReducer';
import albumsReducer from './reducers/albumsReducer';
import messagesReducer from './reducers/messagesReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default  createStore(combineReducers({
    settings: settingsReducer,
    messages: messagesReducer,
    albums: albumsReducer
}), applyMiddleware(logger, thunk));