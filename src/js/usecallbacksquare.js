import React from 'react';

export const Square = 
    React.memo(({n, increment, decrement}) => {
        return (
            <div className='divrow square' >
                <span>Square class changes count</span>
                <button onClick={() => increment(n)} >inc {n}</button>
                <button onClick={() => decrement(n)} >dec {n} </button>
            </div>
        );
    });