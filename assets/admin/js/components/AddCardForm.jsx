import React from 'react';

class AddCardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            title: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        Materialize.updateTextFields();
        this.userNameInput.focus();

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleKeyPress(event) {
        if (event.key === 'Enter' && this.state.username.trim().length > 2) {
            this.props.saveUserAlbum(this.state);
        }
    }

    render() {
        const {cancelUserAlbum, saveUserAlbum} = this.props;
        return (
            <div className="card small">
                <div className="card-content">
                    <div className="input-field col s12">
                        <input placeholder="Enter username here" id="username" type="text"
                               name="username"
                               value={this.state.username}
                               onChange={this.handleInputChange}
                               onKeyPress={this.handleKeyPress}
                               ref={(input)=>{this.userNameInput = input}}
                        />
                        <label htmlFor="username">Instagram User Name</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="title" type="text"
                               name="title"
                               value={this.state.title}
                               onChange={this.handleInputChange}
                               onKeyPress={this.handleKeyPress}
                        />
                        <label htmlFor="title">Album Title (Optional)</label>
                    </div>
                    <div className="col s6 top20">
                        <button className="btn grey" onClick={cancelUserAlbum}>Cancel</button>
                    </div>
                    <div className="col s6 top20">
                        <button
                            onClick={()=>{saveUserAlbum(this.state)}}
                            className={'btn green ' + (this.state.username.trim().length < 3 ? 'disabled' : '')}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddCardForm;