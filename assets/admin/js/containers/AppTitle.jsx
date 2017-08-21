import React from 'react';
import { connect } from 'react-redux';
import { toggleSettingsPanel } from '../actions/settingsAction';

class AppTitle extends React.Component {
    constructor() {
        super();
        this.state = { hover_on_user: false }
    }

    userEntered() {
        this.setState({ hover_on_user: true });
    }

    userLeft() {
        this.setState({ hover_on_user: false });
    }

    render() {
        const { connected_user, disconnectUser, user_removing, toggleSettingsPanel, show_settings } = this.props;
        const settings_btn_bg = show_settings ? "grey" : "blue";
        return (
            <div className="row app-title">
                <div className="col m7 title-col">
                    <h5 className="thin main-title">Srizon Instagram Album
                        {connected_user ?
                            <a
                                className={"ml10 btn-floating btn-spin btn-floating-small waves-effect waves-light " + settings_btn_bg + " darken-3"}
                                onClick={toggleSettingsPanel}><i
                                    className="material-icons">settings</i></a> : null}
                    </h5>
                </div>
                {connected_user ?
                    <div className="col m5 chip-col">
                        <h5 className="right">
                            {user_removing ?
                                <small>
                                    <small>Disconnecting ...</small>
                                </small> :
                                <div className="chip clickable" onClick={disconnectUser}
                                    onMouseEnter={this.userEntered.bind(this)} onMouseLeave={this.userLeft.bind(this)}>
                                    <img src={connected_user.profile_picture} alt={connected_user.username} />
                                    {
                                        connected_user.full_name ?
                                            connected_user.full_name :
                                            connected_user.username
                                    } -{' '}
                                    {
                                        this.state.hover_on_user ?
                                            <span className="red-text">Disconnect</span> :
                                            <span className="green-text">Connected</span>
                                    }
                                </div>}
                        </h5>
                    </div>
                    : ''}
                <div className="col m12">
                    <p>You're using the free version. <a href="https://srizon.com" target="_blank">Get Pro Version</a> for professional support and added feature. Created by <a href="https://srizon.com" target="_blank">Srizon Soft</a>. Post a <a href="https://srizon.com" target="_blank">review</a></p>
                </div>
            </div>
        );
    }
}

// map state
function mapStateToProps(state) {
    return {
        show_settings: state.settings.show_settings
    }
}

// map dispatch
function mapDispatchToProps(dispatch) {
    return {
        toggleSettingsPanel: () => {
            dispatch(toggleSettingsPanel())
        }
    }
}

// connect and export
export default connect(mapStateToProps, mapDispatchToProps)(AppTitle);
