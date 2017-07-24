import {successAlbumSaved, errorReceived, errorRequesting} from './messagesAction';

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

export function saveHashtagAlbum(album) {
    return (dispatch)=> {
        dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_SAVING_HASHTAG_ALBUM'});
        console.log(album);
        axios.post(wpApiSettings.root + 'srizon-instagram/v1/hashtagalbum', {
            hashtag: album.hashtag,
            title: album.title
        })
            .then((response)=> {
                if (response.data.result == 'saved') {
                    dispatch(successAlbumSaved());
                    dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_SAVED_HASHTAG_ALBUM', payload: response.data.albums});
                }
                else {
                    dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_CANCEL_HASHTAG_ALBUM'});
                }
            })
            .catch((error)=> {
                if (error.response) {
                    dispatch(errorReceived(error));
                    dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_NEW_HASHTAG_ALBUM'});
                }
                else if (error.request) {
                    dispatch(errorRequesting(error));
                    dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_NEW_HASHTAG_ALBUM'});
                }
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
                if (response.data.result == 'saved') {
                    dispatch(successAlbumSaved());
                    dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_SAVED_USER_ALBUM', payload: response.data.albums});
                }
                else if (response.data.result == 'selection') {
                    dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_TEMP_ALBUM_TITLE', payload: album.title});
                    dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_USER_SELECTION', payload: response.data.users});
                }
                else {
                    dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_CANCEL_USER_ALBUM'});
                }
            })
            .catch((error)=> {
                if (error.response) {
                    dispatch(errorReceived(error));
                    dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_NEW_USER_ALBUM'});
                }
                else if (error.request) {
                    dispatch(errorRequesting(error));
                    dispatch({type: 'SRIZON_INSTAGRAM_SETTINGS_NEW_USER_ALBUM'});
                }
            })
    };
}
