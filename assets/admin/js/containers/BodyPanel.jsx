import React from 'react';
import {connect} from 'react-redux';
import AlbumList from './AlbumList';
// smart component with redux connect

const BodyPanel = () => (
    <AlbumList />
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
export default connect(mapStateTopProps, mapDispatchToProps)(BodyPanel);
