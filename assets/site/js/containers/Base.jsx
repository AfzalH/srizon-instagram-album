import React from 'react';
import {connect} from 'react-redux';
import {getAlbum, getAlbumData} from '../actions/albumAction';

// smart component with redux connect

class Base extends React.Component {
    componentDidMount() {
        const {id, getAlbum, getAlbumData} = this.props;
        getAlbum(id);
        getAlbumData(id);
    }

    render() {
        const {id} = this.props;
        return (
            <div>
                <h1 className="entry-title">Testing {id}</h1>
            </div>
        )
    }
}

// map state
function mapStateToProps(state) {
    return {
        albums: state.albums
    }
}

// map dispatch
function mapDispatchToProps(dispatch) {
    return {
        getAlbum: (id)=> {
            dispatch(getAlbum(id));
        },
        getAlbumData: (id)=> {
            dispatch(getAlbumData(id));
        }
    }
}

// connect and export
export default connect(mapStateToProps, mapDispatchToProps)(Base);
