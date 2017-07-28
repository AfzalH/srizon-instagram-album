import React from 'react';
import {connect} from 'react-redux';

class AlbumListItemSettings extends React.Component {
    render() {
        return (
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, tenetur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur dolorum eligendi enim error et impedit ipsum laborum libero maxime nam nemo odio pariatur provident quos tempore, voluptate! Aspernatur, cumque deleniti distinctio dolorem et mollitia nemo nostrum nulla, omnis quia, quisquam tenetur voluptatem voluptatibus. Cumque cupiditate dolores eos nobis quasi?</p>
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
    return {}
}

// connect and export
export default connect(mapStateToProps, mapDispatchToProps)(AlbumListItemSettings);
