import React from 'react';
import {connect} from 'react-redux';
import AlbumListItem from './AlbumListItem';
import CardLoading from '../components/partials/CardLoading';
import AddUserAlbumCard from './AddUserAlbumCard';
import AddHashtagAlbumCard from './AddHashtagAlbumCard';
import SelectUser from '../components/add-new/SelectUser';
import {cancelUserAlbum, saveUserAlbum} from '../actions/albumsAction';
import FlipMove from 'react-flip-move';


// smart component with redux connect

const AlbumList = ({loaded, albums, saving_user, saving_hashtag, select_user, users, cancelUserAlbum, title, saveUserAlbum}) => (
    <div className="row">
        <FlipMove duration={500} easing="ease-out">
            <div key="static1">
                {saving_user ?
                    select_user ?
                        <SelectUser key="select_user" users={users} cancelUserAlbum={cancelUserAlbum} title={title}
                                    saveUserAlbum={saveUserAlbum}/> :
                        <CardLoading title="Saving"/> :
                    <AddUserAlbumCard />
                }
            </div>
            <div key="static2">
                {saving_hashtag ?
                    <CardLoading title="Saving"/> :
                    <AddHashtagAlbumCard />
                }
            </div>
            {!loaded ?
                <div key="static3"><CardLoading title="Loading Albums"/></div> :
                albums.map(album=>(
                    <AlbumListItem key={album.id} album={album}/>
                ))
            }
        </FlipMove>
    </div>
);

// map state
function mapStateToProps(state) {
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
export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
