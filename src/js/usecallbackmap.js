import React, { useState, useCallback} from 'react';
import { Square } from './usecallbacksquare';
import { UseCallbackHello } from './usecallbackhello';

export const UseCallbackMap = () => {
    const [count, setCount] = useState(0);
    const favoriteNums = [7, 24, 37];
    const increment = useCallback(n => {
        setCount(c => c + n);
    }, [setCount]);
    const decrement = useCallback((n) => {
        setCount(c => c - n);
    }, [setCount]);

    return (
        <fieldset> <legend>UseCallbackMap mapping array without rerendering</legend>
          <div className='divrow'>UseCallbackHello changes count by 5&nbsp;
            <div className='hello'>
                <UseCallbackHello increment={increment} decrement={decrement}/>
            </div>
            <div>count: {count} </div>
          </div>
          
            {favoriteNums.map(n => { 
                return  <Square increment={increment} decrement={decrement}  n={n} key={n} /> ; 
            })}
          
        </fieldset>
    );
};
