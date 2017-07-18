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
            .catch(error=> {
                alert(error.response.message);
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
                dispatch({
                    type: 'SRIZON_INSTAGRAM_MESSAGE_RECEIVED',
                    payload: {
                        txt: 'Album Saved!',
                        type: 'success',
                        expire_in: 3
                    }
                });
                dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_SAVED_USER_ALBUM', payload: response.data});
            })
            .catch((error)=> {
                if (error.response) {
                    dispatch({
                        type: 'SRIZON_INSTAGRAM_MESSAGE_RECEIVED',
                        payload: {
                            txt: error.response.data.message,
                            type: 'error',
                            expire_in: 5
                        }
                    });
                    dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_CANCEL_USER_ALBUM'});
                }
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
