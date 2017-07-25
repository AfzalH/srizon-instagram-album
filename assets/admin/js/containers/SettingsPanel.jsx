import React from 'react';
import {connect} from 'react-redux';
import {saveGlobalSettings} from '../actions/settingsAction';

class SettingsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...this.props.globalSettings};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.save = this.save.bind(this);
    }

    componentDidMount() {
        Materialize.updateTextFields();
    }

    handleInputChange(event) {
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

