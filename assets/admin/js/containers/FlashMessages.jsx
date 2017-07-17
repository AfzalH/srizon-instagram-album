import React from 'react';
import {connect} from 'react-redux';
import TempMessage from '../components/TempMessage';


// smart component with redux connect

const FlashMessages = ({count, messages, hidemsg}) => (
    count ?
        <div className="col s12">
            {
                messages.map(msg=><TempMessage msg={msg} hidemsg={hidemsg}/>)
            }

        </div> :
        null
);

// map state
function mapStateTopProps(state) {
    return {
        count: state.messages.count,
        messages: state.messages.messages
    }
}

// map dispatch
function mapDispatchToProps(dispatch) {
    return {
        hidemsg: (id)=> {
            dispatch({
                type: 'SRIZON_INSTAGRAM_MESSAGE_EXPIRED',
                payload: id
            })
        }
    }
}

// connect and export
export default connect(mapStateTopProps, mapDispatchToProps)(FlashMessages);
