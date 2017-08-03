const initialState = {};
export default function albumReducer(state = initialState, action) {
    switch (action.type) {
        case 'INIT_ALBUMS':
            return {
                ...state,
                [action.id]: {
                    settings_loaded: false, data_loaded: false
                }
            };
            break;
        default:
            return state;
    }
}
