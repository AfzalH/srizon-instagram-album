import React from 'react';
import TextField from '../components/form/TextField';
import RangeField from '../components/form/RangeField';
import RadioField from '../components/form/RadioField';
import SwitchField from '../components/form/SwitchField';

class SettingsForm extends React.Component {
    render() {
        const { hich, pstate, global = false } = this.props;
        return (
            <div className="row">

                <div className={global ? "col s12 m6 top20 pr50" : "col s12 plr0"}>
                    <RangeField val={pstate.cache_time} onch={hich} name="cache_time"
                        label="Cache Time For API data (Mins)" min={10} max={10080} />
                    <p className="top0">Layout</p>
                    <RadioField val="collage" label="Responsive Collage" name="layout"
                        curval={pstate.layout} onch={hich} />
                    {pstate.layout == "collage" ?
                        <p className="left35">Max ~50 Images For this layout on free version. <a target="_blank" href="https://srizon.com">Get Pro</a></p>
                        : null}
                    <RadioField val="carousel" label="Carousel (max 33 image)" name="layout"
                        curval={pstate.layout} onch={hich} />
                </div>
                <div className={global ? "col s12 m6 top20 pr50" : "col s12 top20 plr0"}>
                    <div>
                        <p>Layout Related Parameters:</p>
                        {pstate.layout === "carousel" ?
                            <div>
                                <RangeField val={pstate.total_image_carousel} onch={hich} name="total_image_carousel"
                                    aclass="" label="Total image to load (max 33 for this layout)" min={1}
                                    max={33} />
                                <SwitchField name="carousel_thumb_show_hover" val={pstate.carousel_thumb_show_hover}
                                    onch={hich}
                                    label="Show caption on Thumbnail hover" aclass="top20" />
                                <SwitchField name="carousel_img_txt_overlay" val={pstate.carousel_img_txt_overlay}
                                    onch={hich}
                                    label="Show description overlay on Full Image" aclass="top20" />
                                <SwitchField name="carousel_show_count" val={pstate.carousel_show_count}
                                    onch={hich}
                                    label="Show image count" aclass="top20" />
                                <SwitchField name="carousel_show_thumb" val={pstate.carousel_show_thumb} onch={hich}
                                    label="Show Thumbnails" aclass="top20" />
                                {pstate.carousel_show_thumb ?
                                    <div>
                                        <div className="top20">Thumb Position</div>
                                        <RadioField val="bottom" label="Bottom" name="carousel_thumb_position"
                                            curval={pstate.carousel_thumb_position} onch={hich} />
                                        <RadioField val="top" label="Top" name="carousel_thumb_position"
                                            curval={pstate.carousel_thumb_position} onch={hich} />
                                        <RadioField val="left" label="Left" name="carousel_thumb_position"
                                            curval={pstate.carousel_thumb_position} onch={hich} />
                                    </div>
                                    : null}
                                <SwitchField name="carousel_auto_play" val={pstate.carousel_auto_play} onch={hich}
                                    label="Auto Play (Auto Slide)" aclass="top20" />
                                {pstate.carousel_auto_play ?
                                    <RangeField val={pstate.carousel_slide_interval} onch={hich}
                                        name="carousel_slide_interval"
                                        label="Slider Interval (second)" min={1} max={10} />
                                    : null
                                }
                            </div> : null}
                        {pstate.layout === "collage" ?
                            <div>
                                <RangeField val={pstate.initial_load} onch={hich} name="initial_load"
                                    label="Image to load initially and on `Load More`" min={1} max={33} />
                                <RangeField val={pstate.collage_margin} onch={hich} name="collage_margin"
                                    label="Margin size (In-between Images)" min={0} max={10} />
                                <div className="top10">Thumb Size</div>
                                <RadioField val="0" label="Big" name="collage_thumb_size"
                                    curval={pstate.collage_thumb_size} onch={hich} />
                                <RadioField val="1" label="Medium" name="collage_thumb_size"
                                    curval={pstate.collage_thumb_size} onch={hich} />
                                <RadioField val="2" label="Small" name="collage_thumb_size"
                                    curval={pstate.collage_thumb_size} onch={hich} />

                                <SwitchField name="collage_show_hover" val={pstate.collage_show_hover} onch={hich}
                                    label="Show caption on hover" aclass="top20" />

                                <div className="top30">Load More Method</div>

                                <RadioField val="disabled" label="Disabled" name="collage_load_more_method"
                                    curval={pstate.collage_load_more_method} onch={hich} />
                                <RadioField val="lightbox" label="Lightbox Navigation" name="collage_load_more_method"
                                    curval={pstate.collage_load_more_method} onch={hich} />
                                <RadioField val="button" label="Button" name="collage_load_more_method"
                                    curval={pstate.collage_load_more_method} onch={hich} />
                                <RadioField val="auto" label="Auto Load (on Scroll)" name="collage_load_more_method"
                                    curval={pstate.collage_load_more_method} onch={hich} />

                                {pstate.collage_load_more_method == 'button' ?
                                    <TextField val={pstate.load_more_text} onch={hich} name="load_more_text"
                                        label="Load More Button Text" aclass="top40" /> : null}
                            </div> : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default SettingsForm;