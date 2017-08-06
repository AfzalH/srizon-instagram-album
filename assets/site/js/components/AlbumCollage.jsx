import React from 'react';
import Collage from 'react-photo-gallery';
import Lightbox from 'react-images';

class AlbumCollage extends React.Component {
    constructor() {
        super();
        this.state = {currentImage: 0, lightboxIsOpen: false};
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    openLightbox(index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true
        });
    }

    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        });
    }

    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1
        });
    }

    gotoNext() {
        // if (this.state.photos.length - 2 === this.state.currentImage) {
        //     this.loadMorePhotos();
        // }
        this.setState({
            currentImage: this.state.currentImage + 1
        });
    }

    render() {
        const {album} = this.props;
        const images = album.data.data.map((img)=>({
            src: img.images.standard_resolution.url,
            srcset: [
                img.images.standard_resolution.url + ' ' + img.images.standard_resolution.width + 'w',
                img.images.low_resolution.url + ' ' + img.images.low_resolution.width + 'w',
                img.images.thumbnail.url + ' ' + img.images.thumbnail.width + 'w'
            ],
            sizes: [
                '(min-width: 480px) 50vw',
                '(min-width: 1024px) 33.3vw',
                '100vw'
            ],
            width: img.images.standard_resolution.width,
            height: img.images.standard_resolution.height,
            alt: img.caption ? img.caption.text : null,
            caption: img.caption ? img.caption.text : null
        }));
        return (
            <div>
                <Collage photos={images} cols={2} onClickPhoto={this.openLightbox}/>
                <Lightbox
                    theme={{container: { background: 'rgba(0, 0, 0, 0.85)' }}}
                    images={images}
                    backdropClosesModal={true}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                    width={1600}
                />
            </div>

        )
    }
}

export default AlbumCollage;