import React from 'react';
import {connect} from 'react-redux';
import {newUserAlbum, cancelUserAlbum} from '../actions/settingsAction';

// smart component with redux connect

class AddUserAlbumCard extends React.Component {
    componentDidUpdate() {
        Materialize.updateTextFields();
        this.userNameInput.focus();
    }

    render() {
        const {newUserAlbum, cancelUserAlbum, open_form} = this.props;
        return (
            <div className="col s12 l4 m6">
                {!open_form ?
                    <div className="card small clickable" onClick={newUserAlbum}>
                        <div className="card-content">
                            <div className="row">
                                <div className="col s12 center">
                                    <span className="green-text text-lighten-3 big-icon">+</span>
                                </div>
                                <div className="s12 center">
                                    <h5 className="thin"><span
                                        className="green-text text-darken-3">Add User Album</span></h5>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className="card small">
                        <div className="card-content">
                            <div className="input-field col s12">
                                <input placeholder="Enter username here" id="first_name" type="text"
                                       className="validate"
                                       ref={(input)=>{this.userNameInput = input}}
                                />
                                <label for="first_name">Instagram User Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="first_name" type="text"
                                       className="validate"
                                       ref={(input)=>{this.userTitleInput = input}}
                                />
                                <label for="first_name">Album Title (Optional)</label>
                            </div>
                            <div className="col s6 top20">
                                <button className="btn grey" onClick={cancelUserAlbum}>Cancel</button>
                            </div>
                            <div className="col s6 top20">
                                <button className="btn green">Submit</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

// map state
function mapStateTopProps(state) {
    return {
        open_form: state.settings.open_user_album_form
    }
}

// map dispatch
function mapDispatchToProps(dispatch) {
    return {
        newUserAlbum: ()=> {
            dispatch(newUserAlbum())
        },
        cancelUserAlbum: ()=> {
            dispatch(cancelUserAlbum())
        }
    }
}

// connect and export
export default connect(mapStateTopProps, mapDispatchToProps)(AddUserAlbumCard);
