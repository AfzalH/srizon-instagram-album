import {errorReceived, errorRequesting, successGlobalSettingsSaved, errorUnknown} from './messagesAction';

export function loadSettings() {
    return dispatch => {
        axios.get(wpApiSettings.root + 'srizon-instagram/v1/settings')
            .then((response)=> {
                dispatch({
                    type: 'SRIZON_INSTAGRAM_SETTINGS_RECEIVED',
                    payload: response.data
                });
                dispatch(loadAlbums());
            })
    }
}

export function loadAlbums() {
    return dispatch => {
        axios.get(wpApiSettings.root + 'srizon-instagram/v1/album')
            .then(response=> {
                dispatch({
                    type: 'SRIZON_INSTAGRAM_ALBUMS_RECEIVED',
                    payload: response.data
                })
            })
            .catch((error)=> {
                if (error.response) {
                    dispatch(errorReceived(error));
                }
                else if (error.request) {
                    dispatch(errorRequesting(error));
                }
            })
    }
}

export function disconnectUser() {
    return dispatch => {
        if (window.confirm('Are you sure?')) {
            dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_USER_REMOVEING'});
            axios.get(wpApiSettings.root + 'srizon-instagram/v1/disconnect-user')
                .then(()=> {
                    dispatch(loadSettings())
                })
                .catch((error)=> {
                    if (error.response) {
                        dispatch(errorReceived(error));
                    }
                    else if (error.request) {
                        dispatch(errorRequesting(error));
                    }
                })
        }
    }
}

export function toggleSettingsPanel() {
    return {
        type: 'SRIZON_INSTAGRAM_SETTINGS_TOGGLE_SETTINGS_PANEL'
    }
}

export function saveGlobalSettings(settings) {
    return dispatch => {
        dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_SAVING_GLOBAL'});
        axios.post(wpApiSettings.root + 'srizon-instagram/v1/save-global-settings', settings)
            .then((response)=> {
                console.log(response.data);
                if (response.data.result == 'saved') {
                    dispatch(successGlobalSettingsSaved());
                    dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_SAVED_GLOBAL', payload: response.data.data});
                }
                else {
                    dispatch(errorUnknown());
                    dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_SAVING_ERROR_GLOBAL'});
                }
            })
            .catch((error)=> {
                if (error.response) {
                    dispatch(errorReceived(error));
                    dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_SAVING_ERROR_GLOBAL'});
                }
                else if (error.request) {
                    dispatch(errorRequesting(error));
                    dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_SAVING_ERROR_GLOBAL'});
                }
            });

    }
}
