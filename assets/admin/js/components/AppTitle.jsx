import React from 'react';

class AppTitle extends React.Component {
    constructor() {
        super();
        this.state = {hover_on_user: false}
    }

    userEntered() {
        this.setState({hover_on_user: true});
    }

    userLeft() {
        this.setState({hover_on_user: false});
    }

    render() {
        const {connected_user, disconnectUser, user_removing} = this.props;
        return (
            <div className="row">
                <div className="col m6">
                    <h5 className="thin">Srizon Instagram Album</h5>
                </div>
                {connected_user ?
                    <div className="col m6">
                        <h5 className="right">
                            {user_removing ?
                                <small>
                                    <small>Disconnecting ...</small>
                                </small> :
                                <div className="chip connected-user" onClick={disconnectUser}
                                     onMouseEnter={this.userEntered.bind(this)} onMouseLeave={this.userLeft.bind(this)}>
                                    <img src={connected_user.profile_picture} alt={connected_user.username}/>
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
            </div>
        );
    }
}

export default AppTitle;