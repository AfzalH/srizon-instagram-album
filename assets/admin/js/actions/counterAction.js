export function doIncrement() {
    return {
        type: 'INCREMENT'
    }
}

export function doDecrement() {
    return dispatch=> {
        setTimeout(()=> {
            dispatch(
                {
                    type: 'DECREMENT'
                }
            );
        }, 1000);
    };

}