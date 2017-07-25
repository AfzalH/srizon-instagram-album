import React from 'react';
import {connect} from 'react-redux';
import AppTitle from './AppTitle';
import GetTokenButton from '../components/GetTokenButton';
import BodyPanel from './BodyPanel';
import {disconnectUser} from '../actions/settingsAction';
import FlashMessages from './FlashMessages';

// smart component with redux connect

const MainPannel = ({options, disconnectUser, user_removing}) => (
    <div>
        <AppTitle connected_user={options.connected_user} user_removing={user_removing}
                  disconnectUser={disconnectUser}/>
        <FlashMessages />
        {options.access_token ?
            <BodyPanel /> : <GetTokenButton options={options}/>

        }
    </div>
);

// map state
function mapStateToProps(state) {
    return {
        options: state.settings.options,
        user_removing: state.settings.user_removing
    }
}

// map dispatch
function mapDispatchToProps(dispatch) {
    return {
        disconnectUser: ()=>dispatch(disconnectUser())
    }
}

// connect and export
export default connect(mapStateToProps, mapDispatchToProps)(MainPannel);
