import {createStore, combineReducers, applyMiddleware} from 'redux';
import settingsReducer from './reducers/settingsReducer';
import albumsReducer from './reducers/albumsReducer';
import messagesReducer from './reducers/messagesReducer';
import thunk from 'redux-thunk';

// flip commented/uncommented parts below this line to dev/prod build

import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';


export default  createStore(combineReducers({
    settings: settingsReducer,
    messages: messagesReducer,
    albums: albumsReducer
}), composeWithDevTools(applyMiddleware(logger, thunk)));
//
// export default  createStore(combineReducers({
//     settings: settingsReducer,
//     messages: messagesReducer,
//     albums: albumsReducer
// }), applyMiddleware(thunk));