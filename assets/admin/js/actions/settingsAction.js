export function settingsReceived(settings) {
    return {
        type: 'SRIZON_INSTAGRAM_SETTINGS_RECEIVED',
        payload: settings
    }
}

export function loadSettings() {
    return dispatch => {
        axios.get('http://wpp.dev/wp-json/srizon-instagram/v1/settings')
            .then((response)=> {
                console.log(response);
                dispatch({
                    type: 'SRIZON_INSTAGRAM_SETTINGS_RECEIVED',
                    payload: response.data
                })
            })
    }
}