import React from 'react';
import {connect} from 'react-redux';

// smart component with redux connect

const Base = ({options}) => (
    <div>
        {options.access_token ?
            <p>Token: {options.access_token}</p> :
            <a className="btn"
               href={
               options.oauth_url+'?client_id='+options.client_id+'&redirect_uri='
               +options.redirect_uri+'?return_url='+encodeURI(window.location.href)+'&response_type='
               +options.response_type+'&scope='+options.scope}>Get Token</a>
        }
    </div>
);

// map state
function mapStateTopProps(state) {
    return {
        options: state.settings.options
    }
}

// map dispatch
function mapDispatchToProps(dispatch) {
    return {}
}

// connect and export
export default connect(mapStateTopProps, mapDispatchToProps)(Base);
