export default function settingsReducer(state = {init: true, user_removing: false}, action) {
    switch (action.type) {
        case 'SRIZON_INSTAGRAM_SETTINGS_RECEIVED':
            return {...state, init: false, options: action.payload, user_removing: false};
        case 'SRIZON_INSTAGRAM_SETTINGS_USER_REMOVEING':
            return {...state, user_removing: true};
        default:
            return state;
    }
}