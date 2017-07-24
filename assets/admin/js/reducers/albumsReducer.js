const initial_state = {
    albums: [],
    initial_load: false
};
export default function albumsReducer(state = initial_state, action) {
    switch (action.type) {
        case 'SRIZON_INSTAGRAM_ALBUMS_RECEIVED':
            return {...state, initial_load: true, albums: action.payload};
        case 'SRIZON_INSTAGRAM_ALBUM_DELETED':
            return {...state, albums: albums.filter(album=>(album.id != action.payload.id))};
        case 'SRIZON_INSTAGRAM_ALBUM_ADDED':
            return {...state, albums: [...albums, action.payload]};
        case 'SRIZON_INSTAGRAM_SETTINGS_SAVED_USER_ALBUM':
            return {...state, albums: action.payload};
        case 'SRIZON_INSTAGRAM_SETTINGS_SAVED_HASHTAG_ALBUM':
            return {...state, albums: action.payload};
        default:
            return state;
    }
}