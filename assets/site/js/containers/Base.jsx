import React from 'react';
import {connect} from 'react-redux';

// smart component with redux connect

const Base = ({id, incr, decr}) => (
    <div>
        <h1 className="entry-title">Testing {id}</h1>
    </div>
);

// map state
function mapStateToProps(state) {
    return {
    }
}

// map dispatch
function mapDispatchToProps(dispatch) {
    return {
        incr: (id)=>dispatch({type: 'INC', payload: id}),
        decr: (id)=>dispatch({type: 'DEC', payload: id})
    }
}

// connect and export
export default connect(mapStateToProps, mapDispatchToProps)(Base);
