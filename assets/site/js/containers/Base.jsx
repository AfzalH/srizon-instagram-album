import React from 'react';
import {connect} from 'react-redux';
import {getAlbum, getAlbumData} from '../actions/albumAction';
import LayoutSelector from '../components/LayoutSelector';

// smart component with redux connect

class Base extends React.Component {
    componentDidMount() {
        const {id, getAlbum, getAlbumData} = this.props;
        getAlbum(id);
        getAlbumData(id);
    }

    render() {
        const {id, albums} = this.props;
        return (
            (albums[id].data_loaded && albums[id].options_loaded) ?

                <LayoutSelector album={albums[id]}/>
                :
                <div>Loading...</div>
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
