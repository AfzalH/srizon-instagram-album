import React from 'react';
import AlbumCarousel from './AlbumCarousel';
import AlbumCollage from './AlbumCollage';

class LayoutSelector extends React.Component {
    render() {
        const {album} = this.props;
        return (
            album.data.meta.code == 200 ?
                album.options.options.layout == 'carousel' ?
                    <AlbumCarousel album={album}/>
                    :
                    album.options.options.layout == 'collage' ?
                        <AlbumCollage album={album}/>
                        :
                        <div>Layout <em>{album.options.options.layout}</em> not found</div>
                : <p>Couldn't get the images for <em>{album.options.title}</em>. Probably private album</p>
        )
    }
}

export default LayoutSelector;