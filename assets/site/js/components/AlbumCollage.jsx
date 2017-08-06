import React from 'react';
import Collage from '../lib/Gallery';
import Lightbox from 'react-images';

class AlbumCollage extends React.Component {
    constructor() {
        super();
        this.state = {currentImage: 0, lightboxIsOpen: false, cols: 2};
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.updateCol = this.updateCol.bind(this);
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

    componentDidMount() {
        this.updateCol();
    }

    componentDidUpdate() {
        this.updateCol();
    }

    updateCol() {
        setTimeout(()=> {
            const width = this.refs["collage" + this.props.album.options.id].state.containerWidth;
            if (width < 250) {
                this.setState({cols: 1});
            }
            else if (width < 600) {
                this.setState({cols: 2});
            }
            else if (width < 900) {
                this.setState({cols: 3});
            }
            else {
                this.setState({cols: 4});
            }
        }, 1000);
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
                <Collage ref={"collage"+album.options.id} photos={images} cols={this.state.cols}
                         onClickPhoto={this.openLightbox}/>
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