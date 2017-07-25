import React from 'react';
import {connect} from 'react-redux';
import TempMessage from '../components/partials/TempMessage';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


// smart component with redux connect

const FlashMessages = ({count, messages, hidemsg}) => (
    <div className="fixed-top-right">
        <ReactCSSTransitionGroup transitionName="slide-up" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {
                count ? messages.map(msg=><TempMessage key={msg.id} msg={msg} hidemsg={hidemsg}/>) : null
            }
        </ReactCSSTransitionGroup>
    </div>
);

// map state
function mapStateToProps(state) {
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
export default connect(mapStateToProps, mapDispatchToProps)(FlashMessages);
