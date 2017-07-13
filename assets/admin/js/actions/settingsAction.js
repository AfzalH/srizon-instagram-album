export function settingsReceived(settings) {
    return {
        type: 'SRIZON_INSTAGRAM_SETTINGS_RECEIVED',
        payload: settings
    }
}

export function loadSettings() {
    return dispatch => {
        axios.get(wpApiSettings.root + 'srizon-instagram/v1/settings')
            .then((response)=> {
                dispatch({
                    type: 'SRIZON_INSTAGRAM_SETTINGS_RECEIVED',
                    payload: response.data
                })
            })
    }
}

export function disconnectUser() {
    return dispatch => {
        dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_USER_REMOVEING'});
        axios.get(wpApiSettings.root + 'srizon-instagram/v1/disconnect-user')
            .then((response)=> {
                dispatch(loadSettings())
            })
    }
}

export function newUserAlbum() {
    return {
        type: 'SRIZON_INSTAGRAM_SETTINGS_NEW_USER_ALBUM'
    }
}

export function cancelUserAlbum(){
    return {
        type: 'SRIZON_INSTAGRAM_SETTINGS_CANCEL_USER_ALBUM'
    }
}

export function newHashtagAlbum() {
    return {
        type: 'SRIZON_INSTAGRAM_SETTINGS_NEW_HASHTAG_ALBUM'
    }
}