import React from 'react';
import {connect} from 'react-redux';
import CircularLoaderCard from '../components/CircularLoaderCard';

// smart component with redux connect

const AlbumListItemLoading = ({title}) => (
    <div className="col s12 l4 m6">
        <div className="card small">
            <div className="card-content">
                {title ?
                    <div className="center">
                        <h5 className="thin">{title}</h5>
                    </div>
                    : ''}
                <CircularLoaderCard />
            </div>
        </div>
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
export default connect(mapStateTopProps, mapDispatchToProps)(AlbumListItemLoading);
