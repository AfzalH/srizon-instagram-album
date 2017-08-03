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
                }
            });
    }
}