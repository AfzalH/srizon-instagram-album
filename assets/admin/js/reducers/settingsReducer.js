export default function settingsReducer(state = {init: true}, action) {
    switch (action.type) {
        case 'SRIZON_INSTAGRAM_SETTINGS_RECEIVED':
            return Object.assign({}, state, {init: false, options: action.payload});
        default:
            return state;
    }
}