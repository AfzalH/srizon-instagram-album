const initialState = {};
export default function albumReducer(state = initialState, action) {
    switch (action.type) {
        case 'INIT_ALBUMS':
            return {
                ...state,
                [action.id]: {
                    options_loaded: false,
                    data_loaded: false
                }
            };
            break;
        case 'ALBUM_OPTIONS_LOADED':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    options_loaded: true,
                    options: action.payload
                }
            };
            break;
        case 'ALBUM_DATA_LOADED':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    data_loaded: true,
                    data: action.payload
                }
            };
            break;
        default:
            return state;
    }
}
