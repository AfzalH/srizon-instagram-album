import React from 'react';
import {connect} from 'react-redux';
import AlbumListItem from './AlbumListItem';
import AlbumListItemLoading from './AlbumListItemLoading';
import AddUserAlbumCard from './AddUserAlbumCard';
import AddHashtagAlbumCard from './AddHashtagAlbumCard';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// smart component with redux connect

const AlbumList = ({loaded, albums, saving_user}) => (
    <div className="row">
        <ReactCSSTransitionGroup transitionName="scale" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {saving_user ?
                <AlbumListItemLoading title="Saving"/> :
                <AddUserAlbumCard />
            }
            <AddHashtagAlbumCard />
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
        loaded: state.albums.initial_load,
        albums: state.albums.albums
    }
}

// map dispatch
function mapDispatchToProps(dispatch) {
    return {}
}

// connect and export
export default connect(mapStateTopProps, mapDispatchToProps)(AlbumList);
