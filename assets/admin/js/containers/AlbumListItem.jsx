import React from 'react';
import {connect} from 'react-redux';

// smart component with redux connect

const AlbumListItem = () => (
    <div className="col s12 l4 m6">
        <div className="card small">
            <div className="card-content">
                <span className="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
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
export default connect(mapStateTopProps, mapDispatchToProps)(AlbumListItem);
