import React from 'react';
import ImageGallery from 'react-image-gallery';


class AlbumCarousel extends React.Component {
    componentDidMount() {
        jQuery('.image-gallery-thumbnails-container img').hover(function () {
            var title = jQuery(this).attr('alt');
            jQuery('<p class="srizon-tooltip"></p>').text(title).appendTo('body').fadeIn('slow');
        }, function () {
            jQuery('.srizon-tooltip').remove();
        }).mousemove(function (e) {
            jQuery('.srizon-tooltip').css({top: e.pageY + 10, left: e.pageX + 20})
        });
    }

    render() {
        const {album} = this.props;
        const images = album.data.data.map((img)=>({
            original: img.images.standard_resolution.url,
            thumbnail: img.images.low_resolution.url,
            description: img.caption ? img.caption.text : null,
            thumbnailAlt: img.caption ? img.caption.text : null,
            originalAlt: img.caption ? img.caption.text : null
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