import React from 'react';
import {connect} from 'react-redux';
import UserChip from '../components/album-list/UserChip';
import HashtagChip from '../components/album-list/HashtagChip';
import {successCopy, errorCopy} from '../actions/messagesAction'

class AlbumListItem extends React.Component {
    constructor(props) {
        super(props);
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
        const {album} = this.props;
        return (
            <div className="col s12 l4 m6">
                <div className="card small">
                    <div className="card-content">
                        <span className="card-title">{album.title}</span>
                        {(album.albumtype == 'user') ?
                            <UserChip album={album}/> : <HashtagChip album={album}/>
                        }
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
                        <div className="col s12 pl0 top10">

                            <p>Test</p>
                        </div>
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
        }
    }
}
// connect and export
export default connect(mapStateToProps, mapDispatchToProps)(AlbumListItem);
