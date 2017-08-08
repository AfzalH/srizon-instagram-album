const initialState = {};
export default function albumReducer(state = initialState, action) {
    switch (action.type) {
        case 'INIT_ALBUMS':
            return {
                ...state,
                [action.id]: {
                    options_loaded: false,
                    data_loaded: false,
                    loading_more: false
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
        case 'ALBUM_DATA_LOADING_MORE':
            return{
                ...state,
                [action.id]:{
                    ...state[action.id],
                    loading_more: true
                }
            };
            break;
        case 'ALBUM_DATA_LOADED_MORE':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    data_loaded: true,
                    loading_more: false,
                    data: {
                        data: [...state[action.id].data.data, ...action.payload.data],
                        meta: action.payload.meta,
                        pagination: action.payload.pagination
                    }
                }
            };
            break;
        default:
            return state;
    }
}
