import React from 'react';
import Collage from '../lib/Gallery';
import Lightbox from 'react-images';
import debounce from 'lodash.debounce';

class AlbumCollage extends React.Component {
    constructor() {
        super();
        this.state = {currentImage: 0, lightboxIsOpen: false, cols: 2};
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.updateColDebounced = debounce(this.updateCol.bind(this), 200);
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
        this.updateColDebounced();
        window.addEventListener("resize", this.updateColDebounced);

        jQuery('.srizon img').hover(function () {
            var title = jQuery(this).attr('alt');
            jQuery('<p class="srizon-tooltip"></p>').text(title).appendTo('body').fadeIn('slow');
        }, function () {
            jQuery('.srizon-tooltip').remove();
        }).mousemove(function (e) {
            jQuery('.srizon-tooltip').css({top: e.pageY + 10, left: e.pageX + 20})
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateColDebounced);
    }

    componentDidUpdate() {
        this.updateColDebounced();
    }

    updateCol() {
        let newCol = 2;
        const width = this.refs["collage" + this.props.album.options.id].state.containerWidth;
        if (width < 250) newCol = 1;
        else if (width < 600) newCol = 2;
        else if (width < 900) newCol = 3;
        else newCol = 4;

        if (this.state.cols != newCol) {
            this.setState({cols: newCol});
        }
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