import React from 'react';
import {connect} from 'react-redux';
import {doIncrement, doDecrement} from '../actions/counterAction';

const Test = ({val, onIncrement, onDecrement}) => (
    <div>
        <h1>{val}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

function mapStateTopProps(state) {
    return {
        val: state.counterReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrement: ()=> {
            dispatch(doIncrement())
        },
        onDecrement: ()=> {
            dispatch(doDecrement())
        }
    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(Test);
