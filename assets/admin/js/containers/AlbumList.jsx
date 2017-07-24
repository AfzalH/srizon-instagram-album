import React from 'react';
import {connect} from 'react-redux';
import AlbumListItem from '../components/AlbumListItem';
import AlbumListItemLoading from '../components/AlbumListItemLoading';
import AddUserAlbumCard from './AddUserAlbumCard';
import AddHashtagAlbumCard from './AddHashtagAlbumCard';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SelectUser from '../components/SelectUser';
import {cancelUserAlbum, saveUserAlbum} from '../actions/albumsAction';


// smart component with redux connect

const AlbumList = ({loaded, albums, saving_user, saving_hashtag, select_user, users, cancelUserAlbum, title, saveUserAlbum}) => (
    <div className="row">
        <ReactCSSTransitionGroup transitionName="scale" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {saving_user ?
                select_user ?
                    <SelectUser key="select_user" users={users} cancelUserAlbum={cancelUserAlbum} title={title}
                                saveUserAlbum={saveUserAlbum}/> :
                    <AlbumListItemLoading title="Saving"/> :
                <AddUserAlbumCard />
            }
            {saving_hashtag ?
                <AlbumListItemLoading title="Saving"/> :
                <AddHashtagAlbumCard />
            }
            {!loaded ?
                <AlbumListItemLoading /> :
                albums.map(album=>(
                    <AlbumListItem key={album.id} album={album}/>
                ))
            }
        </ReactCSSTransitionGroup>
    </div>
);

// map state
function mapStateTopProps(state) {
    return {
        saving_user: state.settings.saving_user_in_progress,
        saving_hashtag: state.settings.saving_hashtag_in_progress,
        loaded: state.albums.initial_load,
        albums: state.albums.albums,
        select_user: state.settings.show_user_selection_prompt,
        users: state.settings.users_to_select,
        title: state.settings.temp_album_title
    }
}

// map dispatch
function mapDispatchToProps(dispatch) {
    return {
        cancelUserAlbum: ()=> {
            dispatch(cancelUserAlbum())
        },
        saveUserAlbum: (album)=> {
            dispatch(saveUserAlbum(album))
        }
    }
}

// connect and export
export default connect(mapStateTopProps, mapDispatchToProps)(AlbumList);
