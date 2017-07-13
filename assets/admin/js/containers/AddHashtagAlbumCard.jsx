import React from 'react';
import {connect} from 'react-redux';
import {newHashtagAlbum} from '../actions/settingsAction';


// smart component with redux connect

const AddUserAlbumCard = ({newHashtagAlbum, open_form}) => (
    <div className="col s12 l4 m6">
        {!open_form ?
            <div className="card small clickable" onClick={newHashtagAlbum}>
                <div className="card-content">
                    <div className="row">
                        <div className="col s12 center">
                            <span className="blue-text text-lighten-3 big-icon">+</span>
                        </div>
                        <div className="s12 center">
                            <h5 className="thin"><span className="blue-text text-darken-4">Add #hashtag Album</span>
                            </h5>

                        </div>
                    </div>
                </div>
            </div> :
            <div className="card small">
                <div className="card-content">
                    form here
                </div>
            </div>
        }
    </div>
);

// map state
function mapStateTopProps(state) {
    return {
        open_form: state.settings.open_hashtag_album_form
    }
}

// map dispatch
function mapDispatchToProps(dispatch) {
    return {
        newHashtagAlbum: ()=> {
            dispatch(newHashtagAlbum())
        }
    }
}

// connect and export
export default connect(mapStateTopProps, mapDispatchToProps)(AddUserAlbumCard);
