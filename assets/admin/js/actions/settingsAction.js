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

export function cancelUserAlbum() {
    return {
        type: 'SRIZON_INSTAGRAM_SETTINGS_CANCEL_USER_ALBUM'
    }
}

export function saveUserAlbum(album) {
    return (dispatch) => {
        dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_SAVING_USER_ALBUM'});
        axios.post(wpApiSettings.root + 'srizon-instagram/v1/useralbum', {username: album.username, title: album.title})
            .then((response)=> {
                console.log(response.data);
                dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_SAVED_USER_ALBUM'});
            })
    };
}

export function newHashtagAlbum() {
    return {
        type: 'SRIZON_INSTAGRAM_SETTINGS_NEW_HASHTAG_ALBUM'
    }
}

export function cancelHashtagAlbum() {
    return {
        type: 'SRIZON_INSTAGRAM_SETTINGS_CANCEL_HASHTAG_ALBUM'
    }
}
