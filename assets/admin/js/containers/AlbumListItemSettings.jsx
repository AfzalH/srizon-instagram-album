import React from 'react';
import {connect} from 'react-redux';
import TextField from '../components/form/TextField';
import RadioField from '../components/form/RadioField';
import {updateAlbum} from '../actions/albumsAction';

class AlbumListItemSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...this.props.album.options, title: this.props.album.title};
        this.hich = this.hich.bind(this);
    }

    componentDidMount() {
        Materialize.updateTextFields();
        jQuery('select').material_select();
    }

    componentDidUpdate() {
        Materialize.updateTextFields();
        jQuery('select').material_select();
    }

    hich(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { album, updateAlbum, cancelForm} = this.props;
        return (
            <div className="row bottom0">
                <div className="col s12 plr0">
                    <TextField val={this.state.title} onch={this.hich} name="title"
                               label="Title"/>
                    <TextField val={this.state.max_image} onch={this.hich} name="max_image"
                               label="Maximum image to load"/>
                    <TextField val={this.state.initial_load} onch={this.hich} name="initial_load"
                               label="Image to load initially"/>
                    <TextField val={this.state.load_more_load} onch={this.hich} name="load_more_load"
                               label="Image to add on Load More click"/>
                    <TextField val={this.state.load_more_text} onch={this.hich} name="load_more_text"
                               label="Load More Text"/>
                    <div>
                        <p>Sorting</p>
                        <RadioField val="default" label="Default Sorting" name="sorting"
                                    curval={this.state.sorting} onch={this.hich}/>
                        <RadioField val="reversed" label="Reverse of Default Sorting" name="sorting"
                                    curval={this.state.sorting} onch={this.hich}/>
                    </div>

                    <div className="top20">
                        <p className="top0">Layout</p>
                        <RadioField val="collage" label="Responsive Collage" name="layout"
                                    curval={this.state.layout} onch={this.hich}/>
                        <RadioField val="slider" label="Responsive Slider" name="layout"
                                    curval={this.state.layout} onch={this.hich}/>
                        <RadioField val="carousel" label="Carousel" name="layout"
                                    curval={this.state.layout} onch={this.hich}/>
                        {this.state.layout === "collage" ?
                            <TextField val={this.state.collage_row_height} onch={this.hich}
                                       name="collage_row_height" aclass="top40"
                                       label="Target Height for collage row"/>
                            : null}
                    </div>

                    <div className="top20">
                        <p className="top0">Lightbox Selection</p>
                        <RadioField val="built_in" label="Built in Magnific Popup" name="lightbox"
                                    curval={this.state.lightbox} onch={this.hich}/>
                        <RadioField val="other" label="Other/3rd Party Lightbox" name="lightbox"
                                    curval={this.state.lightbox} onch={this.hich}/>

                        {this.state.lightbox === "other" ?
                            <TextField val={this.state.lightbox_attribute} onch={this.hich}
                                       name="lightbox_attribute" aclass="top50"
                                       label="Lightbox Attributes (might be required by the 3rd party lightbox)"/>
                            : null}
                    </div>

                    <div className="row top30 bottom0">
                        <div className="col s6 plr0">
                            <button className="btn btn-small green left"
                                    onClick={()=>{cancelForm();updateAlbum(album.id,this.state)}}>Save
                            </button>
                        </div>
                        <div className="col s6 plr0">
                            <button className="btn btn-small right grey" onClick={cancelForm}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// map state
function mapStateToProps(state) {
    return {
        albums_updating: state.albums.albums_updating
    }
}

// map dispatch
function mapDispatchToProps(dispatch) {
    return {
        updateAlbum: (id, settings)=> {
            dispatch(updateAlbum(id, settings))
        }
    }
}

// connect and export
export default connect(mapStateToProps, mapDispatchToProps)(AlbumListItemSettings);
