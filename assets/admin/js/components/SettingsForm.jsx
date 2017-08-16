import React from 'react';
import TextField from '../components/form/TextField';
import RangeField from '../components/form/RangeField';
import RadioField from '../components/form/RadioField';

class SettingsForm extends React.Component {
    render() {
        const {hich, pstate, global=false} = this.props;
        return (
            <div className="row">

                <div className={global? "col s12 m6 top20 pr50": "col s12 top20 plr0"}>
                    <RangeField val={pstate.cache_time} onch={hich} name="cache_time"
                                label="Cache Time For API data (Mins)" min={10} max={10080}/>
                </div>
                <div className={global? "col s12 m6 top20 pr50": "col s12 top20 plr0"}>
                    <div>
                        <p className="top0">Layout</p>
                        <RadioField val="collage" label="Responsive Collage" name="layout"
                                    curval={pstate.layout} onch={hich}/>
                        <RadioField val="carousel" label="Carousel" name="layout"
                                    curval={pstate.layout} onch={hich}/>
                        {pstate.layout === "carousel" ?
                            <RangeField val={pstate.total_image_carousel} onch={hich} name="total_image_carousel"
                                        aclass="" label="Total image to load" min={1} max={33}/> : null}
                        {pstate.layout === "collage" ?
                            <RangeField val={pstate.initial_load} onch={hich} name="initial_load"
                                        label="Image to load initially and on `Load More`" min={1} max={33}/> : null}
                        {pstate.layout === "collage" ?
                            <RangeField val={pstate.collage_margin} onch={hich} name="collage_margin"
                                        label="Margin size (In-between Images)" min={0} max={10}/> : null}
                        {pstate.layout === "collage" ?
                            <TextField val={pstate.load_more_text} onch={hich} name="load_more_text"
                                       label="Load More Button Text"/> : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default SettingsForm;