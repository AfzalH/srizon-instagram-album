import React from 'react';
import {connect} from 'react-redux';
import UserChip from '../components/album-list/UserChip';
import HashtagChip from '../components/album-list/HashtagChip';
import {successCopy, errorCopy} from '../actions/messagesAction'
import {deleteAlbum} from '../actions/albumsAction';
import AlbumListItemSettings from './AlbumListItemSettings';

class AlbumListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            settings_open: false
        };
    }

    toggleSettingsForm() {
        this.setState((prevState)=>({
            settings_open: !prevState.settings_open
        }));
    }

    componentDidMount() {
        Materialize.updateTextFields();
    }

    handleCopy() {
        const {successCopy, errorCopy} = this.props;
        this.shortcode.select();
        try {
            var successful = document.execCommand('copy');
            successful ? successCopy() : errorCopy();
        } catch (err) {
            errorCopy();
        }
    }

    render() {
        const {album, deleteAlbum} = this.props;
        return (
            <div className="col s12 l4 m6">
                <div className={this.state.settings_open?"card":"card small"}>
                    <div className="card-content">
                        <div className="row">
                            <span className="card-title">{album.title}</span>
                            {(album.albumtype == 'user') ?
                                <UserChip album={album}/> : <HashtagChip album={album}/>
                            }
                        </div>
                        <div className="row plr0 top20">
                            <div className="col s3 pl0 label-text grey-text input-align">
                                S.Code
                            </div>
                            <div className="col s7 pl0">
                                <input className="grey-text" id="shortcode" type="text" name="shortcode"
                                       value={"[srzinst id="+album.id+"]"}
                                       onChange={()=>{}}
                                       ref={(input)=>{this.shortcode = input}}
                                />
                            </div>
                            <div className="col s2 pl0 input-align">
                                <div className="copy-text blue-text text-darken-3" onClick={this.handleCopy.bind(this)}>
                                    Copy
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {this.state.settings_open ? <AlbumListItemSettings /> : null}
                        </div>

                    </div>
                    <div className="card-action">
                        <a className="no-transform blue-text" onClick={this.toggleSettingsForm.bind(this)}>
                            {this.state.settings_open ? "Hide Settings" : "Show Settings"}
                        </a>
                        <a className="right mlr0" onClick={()=>{deleteAlbum(album.id)}}><i
                            className="material-icons red-icon">delete</i></a>
                    </div>
                </div>
            </div>
        );
    }
}

// map state
function mapStateToProps(state) {
    return {}
}

// map dispatch
function mapDispatchToProps(dispatch) {
    return {
        successCopy: ()=> {
            dispatch(successCopy())
        },
        errorCopy: ()=> {
            dispatch(errorCopy())
        },
        deleteAlbum: (id)=> {
            dispatch(deleteAlbum(id));
        }
    }
}
// connect and export
export default connect(mapStateToProps, mapDispatchToProps)(AlbumListItem);
