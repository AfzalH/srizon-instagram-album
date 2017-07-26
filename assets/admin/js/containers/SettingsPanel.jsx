import React from 'react';
import {connect} from 'react-redux';
import {saveGlobalSettings} from '../actions/settingsAction';
import TextField from '../components/form/TextField';
import RadioField from '../components/form/RadioField';

class SettingsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...this.props.globalSettings};
        this.hich = this.hich.bind(this);
        this.save = this.save.bind(this);
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


    save() {
        this.props.saveSettings(this.state);
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <h6>Global Settings</h6>
                    <hr/>
                </div>
                <div className="col s12 m6 top20 pr50">

                    <TextField val={this.state.cache_time} onch={this.hich} name="cache_time"
                               label="Global Caching Time (For API)"/>
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
                </div>
                <div className="col s12 m6 top20 pr50">
                    <div>
                        <p className="top0">Default Layout</p>
                        <RadioField val="collage" label="Responsive Collage" name="layout"
                                    curval={this.state.layout} onch={this.hich}/>
                        <RadioField val="slider" label="Responsive Slider" name="layout"
                                    curval={this.state.layout} onch={this.hich}/>
                        {this.state.layout === "collage" ?
                            <TextField val={this.state.collage_row_height} onch={this.hich}
                                       name="collage_row_height" aclass="top40"
                                       label="Target Height for collage row"/>
                            : null}
                    </div>

                    <div>
                        <p className="top0">Lightbox Selection</p>
                        <RadioField val="built_in" label="Built in Magnific Popup" name="lightbox"
                                    curval={this.state.lightbox} onch={this.hich}/>
                        <RadioField val="other" label="Other/3rd Party Lightbox" name="lightbox"
                                    curval={this.state.lightbox} onch={this.hich}/>

                        {this.state.lightbox === "other" ?
                            <TextField val={this.state.lightbox_attribute} onch={this.hich}
                                       name="lightbox_attribute" aclass="top40"
                                       label="Lightbox Attributes (might be required by the 3rd party lightbox)"/>
                            : null}
                    </div>
                </div>
            </div>
        )
    }
}


// map state
function mapStateToProps(state) {
    return {globalSettings: state.settings.options.global}
}

// map dispatch
function mapDispatchToProps(dispatch) {
    return {
        saveSettings: (settings)=> {
            dispatch(saveGlobalSettings(settings))
        }
    }
}

// connect and export
export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);

