import React, { useState,useEffect } from 'react';
import { useFetch } from './useFetch';

const UseEf6 = () => {
   const [count, setCount] = useState(0);
   const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
        // http://numbersapi.com/43/trivia
    return (
        <fieldset><legend>useef6 rerendering catched API within custom Hook</legend>
          <div className='divrow' >
            <span>count: {count}</span>
            <button onClick={() => setCount(c => c + 1)} >increment</button>
          </div>
          <div className='divrow'>
            {!data ? "loading..." : data}
          </div>
          <div className='divrow'>
            <input name='apidata' placeholder='data' style={{width: '650px'}}
               value={!data ? "loading..." : data} readOnly={true}
                 />
            
          </div>
        </fieldset>
    );
};

export default UseEf6;