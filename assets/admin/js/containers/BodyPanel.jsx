import React from 'react';
import {connect} from 'react-redux';

// smart component with redux connect

const BodyPanel = ({init}) => (
    <div className="row">
        <div className="col s12">Body</div>
    </div>
);

// map state
function mapStateTopProps(state) {
    return {
        init: state.settings.init
    }
}

// map dispatch
function mapDispatchToProps(dispatch) {
    return {}
}

// connect and export
export default connect(mapStateTopProps, mapDispatchToProps)(BodyPanel);
