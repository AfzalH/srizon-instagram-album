import React from 'react';

class TempMessage extends React.Component {
    componentDidMount() {
        const {hidemsg, msg} = this.props;
        const delay = msg.expire_in;
        setTimeout(()=> {
            hidemsg(msg.id)
        }, delay * 1000);
    }

    render() {
        const {msg}= this.props;
        return (
            <div>
                {msg.type.toLowerCase() == 'error' ?
                    <div className="col s12 red lighten-4 red-text text-darken-4 temp-msg">
                        <h5>
                            {msg.txt}
                        </h5>
                    </div> :
                    msg.type.toLowerCase() == 'warning' ?
                        <div className="col s12 yellow lighten-4 yellow-text text-darken-4 temp-msg">
                            <h5>
                                {msg.txt}
                            </h5>
                        </div> :
                        msg.type.toLowerCase() == 'success' ?
                            <div className="col s12 green lighten-4 green-text text-darken-4 temp-msg">
                                <h5>
                                    {msg.txt}
                                </h5>
                            </div> :
                            <div className="col s12 grey lighten-2 grey-text text-darken-2 temp-msg">
                                <h5>
                                    {msg.txt}
                                </h5>
                            </div>
                }
            </div>
        )
    }
}

export default TempMessage;