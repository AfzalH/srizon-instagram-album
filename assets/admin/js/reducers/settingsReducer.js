const initial_state = {
    init: true,
    user_removing: false,
    open_user_album_form: false,
    open_hashtag_album_form: false,
    saving_user_in_progress: false
};
export default function settingsReducer(state = initial_state, action) {
    switch (action.type) {
        case 'SRIZON_INSTAGRAM_SETTINGS_RECEIVED':
            return {...state, init: false, options: action.payload, user_removing: false};
        case 'SRIZON_INSTAGRAM_SETTINGS_USER_REMOVEING':
            return {...state, user_removing: true};
        case 'SRIZON_INSTAGRAM_SETTINGS_NEW_USER_ALBUM':
            return {...state, open_user_album_form: true};
        case 'SRIZON_INSTAGRAM_SETTINGS_CANCEL_USER_ALBUM':
            return {...state, open_user_album_form: false, saving_user_in_progress: false};
        case 'SRIZON_INSTAGRAM_SETTINGS_NEW_HASHTAG_ALBUM':
            return {...state, open_hashtag_album_form: true};
        case 'SRIZON_INSTAGRAM_SETTINGS_CANCEL_HASHTAG_ALBUM':
            return {...state, open_hashtag_album_form: false};
        case 'SRIZON_INSTAGRAM_SETTINGS_SAVING_USER_ALBUM':
            return {...state, saving_user_in_progress: true};
        case 'SRIZON_INSTAGRAM_SETTINGS_SAVED_USER_ALBUM':
            return {...state, open_user_album_form: false, saving_user_in_progress: false};
        default:
            return state;
    }
}