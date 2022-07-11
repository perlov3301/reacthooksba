import React, { useState, useCallback } from 'react';
import { UseCallbackHello } from './usecallbackhello';

export const UseCallback = () => {
    const [count, setCount] = useState(0);
    const increment = useCallback((n) => {
        setCount(c => c + n);
    }, [setCount]);
    const decrement = useCallback((n) => {
        setCount(c => c - n);
    }, [setCount]);

    return (
        <fieldset><legend>no rendering cause of being setCount  within useCallback</legend>
          <div className='divrow'>
            <div className='hello'>
                    <UseCallbackHello increment={increment} decrement={decrement} />
                </div>
                <div>count: {count}</div>
          </div>
      
            
        </fieldset>
    );
};