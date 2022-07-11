import React, { useReducer } from 'react';

function freducer(state, action) {
    switch(action.type) {
        case "increment" : return state + 1; // important: not state++
        case "decrement" : return state - 1; // important: not state--
        default: return state;
    }
}

export const UseReducer = () => {
    const [count, dispatch] = useReducer(freducer, 0);
    return (
        <fieldset><legend>useReducer listening to an action that will be dispatch</legend>
            <div className='divrow'>
                <div>count: {count}</div>
                <button onClick={() => dispatch({ type: "increment" })}>increment</button>
                <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
            </div>
        </fieldset>
    );
};