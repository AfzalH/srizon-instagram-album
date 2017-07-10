import nbar from '../global/nanobar';
export function doIncrement() {
    return {
        type: 'INCREMENT'
    }
}

export function doDecrement() {
    return dispatch=> {
        nbar.go(20);
        setTimeout(()=> {
            nbar.go(100);
            dispatch({type: 'DECREMENT'});
        }, 1000);
    };
}
