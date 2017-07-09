import React from 'react';
import {connect} from 'react-redux';
import {doIncrement, doDecrement} from '../actions/counterAction';
import DumbValue from '../components/DumbValue';

// smart component with redux connect

const Test = ({val, onIncrement, onDecrement}) => (
    <div>
        <DumbValue val={val}/>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

// map state
function mapStateTopProps(state) {
    return {
        val: state.counterReducer
    }
}

// map dispatch
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

// connect and export
export default connect(mapStateTopProps, mapDispatchToProps)(Test);
