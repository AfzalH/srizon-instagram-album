import React from 'react';
import AlbumCarousel from './AlbumCarousel';

class LayoutSelector extends React.Component {
    render() {
        const {album} = this.props;
        return (
            album.data.meta.code == 200 ?
                album.options.options.layout == 'carousel' ?
                    <AlbumCarousel album={album}/>
                    : null
                : <p>Couldn't get the images for <em>{album.options.title}</em>. Probably private album</p>
        )
    }
}

export default LayoutSelector;