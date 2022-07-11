import React, { useState,useEffect } from 'react';
import { useFetch } from './useFetch';

const UseEf7 = () => {
   const [count, setCount] = useState(() => 
       {
         let mycount = JSON.parse(localStorage.getItem("countef7"));
         if (mycount === undefined) { return 1; }
         else { return mycount; }
        }
     );
   const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
        // http://numbersapi.com/43/trivia
   useEffect(() => {
    //  console.log("useef7 localStorage.count:" + localStorage.getItem('count'));
     localStorage.setItem("countef7", JSON.stringify(count));
   },[count]);
    return (
        <fieldset><legend>useEffect7 saveState catched API within custom Hook</legend>
          <div className='divrow' >
            <button onClick={() => setCount(c => c - 1)} >decrement</button>
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

export default UseEf7;