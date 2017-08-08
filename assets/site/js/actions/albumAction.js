export function getAlbum(id) {
    return (dispatch)=> {
        axios.get(srzinstbase + 'album/' + id)
            .then((response)=> {
                if (response.data.result == 'success') {
                    dispatch({
                        type: 'ALBUM_OPTIONS_LOADED',
                        id: id,
                        payload: response.data.album
                    });
                }
            });
        axios.post(srzinstbase + 'album-data', {id: id});
    }
}

export function getAlbumData(id) {
    return (dispatch)=> {
        axios.post(srzinstbase + 'album-data', {id: id})
            .then((response)=> {
                if (response.data.result == 'success') {
                    dispatch({
                        type: 'ALBUM_DATA_LOADED',
                        id: id,
                        payload: response.data.data
                    });
                    dispatch(backgroundUpdate(id));
                }
            });
    }
}

function backgroundUpdate(id) {
    return (dispatch)=> {
        axios.post(srzinstbase + 'album-sync', {id: id})
            .then((response)=> {
                dispatch({
                    type: 'ALBUM_DATA_SYNCED',
                    id: id,
                    payload: response.data.data
                })
            })
    }
}

export function loadMoreData(id, url) {
    return (dispatch)=> {
        dispatch({
            type: 'ALBUM_DATA_LOADING_MORE',
            id: id
        });
        axios.post(srzinstbase + 'album-load-more', {id: id, url: url})
            .then((response)=> {
                if (response.data.result == 'success') {
                    dispatch({
                        type: 'ALBUM_DATA_LOADED_MORE',
                        id: id,
                        payload: response.data.data
                    });
                }
            });
    }
}