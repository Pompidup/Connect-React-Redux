import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    counter: state
});

const CounterComponent= ({ counter, dispatch }) => {

    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => dispatch({ type: 'ADD1'})}>
            +1
            </button>
            <button onClick={() => dispatch({ type: 'REMOVE1'})}>-1</button>
            <button onClick={() => dispatch({ type: 'ADD10'})}>+10</button>
            <button onClick={() => dispatch({ type: 'REMOVE10'})}>-10</button>
            <button onClick={() => dispatch({ type: 'RESET'})}>Remise a zéro</button>
        </div>
    )
};

export default connect(
    mapStateToProps)(CounterComponent);