import React from 'react';
import {connect} from 'react-redux';
import {newUserAlbum, cancelUserAlbum, saveUserAlbum} from '../actions/settingsAction';
import AddCardFront from '../components/AddCardFront';
import AddCardForm from '../components/AddCardForm';

// smart component with redux connect

class AddUserAlbumCard extends React.Component {
    render() {
        const {newUserAlbum, cancelUserAlbum, open_form, saveUserAlbum} = this.props;
        return (
            <div className="col s12 l4 m6">
                {!open_form ?
                    <AddCardFront newUserAlbum={newUserAlbum}/> :
                    <AddCardForm cancelUserAlbum={cancelUserAlbum} saveUserAlbum={saveUserAlbum}/>
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
        },
        saveUserAlbum: (album)=> {
            dispatch(saveUserAlbum(album))
        }
    }
}

// connect and export
export default connect(mapStateTopProps, mapDispatchToProps)(AddUserAlbumCard);
