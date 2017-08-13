import {createStore, combineReducers, applyMiddleware} from 'redux';
import settingsReducer from './reducers/settingsReducer';
import albumsReducer from './reducers/albumsReducer';
import messagesReducer from './reducers/messagesReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


export default  createStore(combineReducers({
    settings: settingsReducer,
    messages: messagesReducer,
    albums: albumsReducer
}), composeWithDevTools(applyMiddleware(logger, thunk)));