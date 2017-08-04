import React from 'react';
import ImageGallery from 'react-image-gallery';


class AlbumCarousel extends React.Component {
    render() {
        const {album} = this.props;
        const images = album.data.data.map((img)=>({
            original: img.images.standard_resolution.url,
            thumbnail: img.images.low_resolution.url,
            description: img.caption ? img.caption.text : null
        }));
        return (

            <ImageGallery
                items={images}
                showFullscreenButton={false}
                showPlayButton={false}
                slideInterval={5000}/>

        )
    }
}

export default AlbumCarousel;