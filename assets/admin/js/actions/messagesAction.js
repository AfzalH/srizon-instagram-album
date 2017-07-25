export function successAlbumSaved() {
    return {
        type: 'SRIZON_INSTAGRAM_MESSAGE_RECEIVED',
        payload: {
            txt: 'Album Saved!',
            type: 'success',
            expire_in: 3
        }

    }
}

export function errorReceived(error) {
    return {
        type: 'SRIZON_INSTAGRAM_MESSAGE_RECEIVED',
        payload: {
            txt: error.response.data.message,
            type: 'error',
            expire_in: 5
        }
    }
}

export function errorRequesting(error) {
    return {
        type: 'SRIZON_INSTAGRAM_MESSAGE_RECEIVED',
        payload: {
            txt: 'Error occurred while connecting to server',
            type: 'error',
            expire_in: 5
        }
    }
}

export function successCopy() {
    return {
        type: 'SRIZON_INSTAGRAM_MESSAGE_RECEIVED',
        payload: {
            txt: 'Successfully Copied... Now paste it on a Page or Post',
            type: 'success',
            expire_in: 5
        }

    }
}

export function errorCopy() {
    return {
        type: 'SRIZON_INSTAGRAM_MESSAGE_RECEIVED',
        payload: {
            txt: 'Couldn\'t Select and Copy. Try to Select and Copy manually!',
            type: 'error',
            expire_in: 5
        }

    }
}