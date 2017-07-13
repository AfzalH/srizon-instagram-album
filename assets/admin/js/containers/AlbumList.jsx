import React from 'react';
import {connect} from 'react-redux';
import AlbumListItem from './AlbumListItem';
import AddUserAlbumCard from './AddUserAlbumCard';
import AddHashtagAlbumCard from './AddHashtagAlbumCard';
// smart component with redux connect

const AlbumList = () => (
    <div className="row">
        <AddUserAlbumCard />
        <AddHashtagAlbumCard />
        <AlbumListItem />
        <AlbumListItem />
        <AlbumListItem />
        <AlbumListItem />
        <AlbumListItem />
        <AlbumListItem />
        <AlbumListItem />
        <AlbumListItem />
    </div>
);

// map state
function mapStateTopProps(state) {
    return {}
}

// map dispatch
function mapDispatchToProps(dispatch) {
    return {}
}

// connect and export
export default connect(mapStateTopProps, mapDispatchToProps)(AlbumList);
