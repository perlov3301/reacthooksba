import React , { useState, useEffect } from 'react';
import { useFetch } from './useFetchRef4';

export const HelloUseref4 = () => {
    const [count, setCount ] = useState(() => 
        {
            let initcount = JSON.parse(localStorage.getItem("countref4"));
           if (initcount === undefined) {return 1;}
           else { return initcount; }
        }
    );
    const urltrivia = `http://numbersapi.com/${count}/trivia`;
    const fetchobject = useFetch(urltrivia);
    // console.log("hellouseref4 fetchobject: " + fetchobject);
    const {data, loading }= useFetch(`http://numbersapi.com/${count}/trivia`);
    useEffect(() => {
        localStorage.setItem("countref4", JSON.stringify(count));
    }, [count]);

    return (
        <div>
        <div className="divrow"><span>Hellouseref4 setState after unmounting</span>
          {/* <div>&nbsp;renders:{renders.current}</div> */}
        </div>
        <div>{!data ? "loading..." : data} </div>
    
        <input name='mydata' placeholder='await to data'
        value={!data ? "loading" : data}
        style={{width:'90%'}} readOnly />
        <div className='divrow'>
            <button onClick={() => setCount(c => c - 1)} >decrement</button>
            <div>count: {count}</div>
            <button onClick={() => setCount(c => c + 1)} >increment</button>
        </div>
    </div>
    ) ;
};