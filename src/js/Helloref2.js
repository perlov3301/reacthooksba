import React, { useState, useRef, useEffect } from "react";
import { useFetch } from "./useFetch";

export const HelloRef2 = () => {
    const renders = useRef(0);
    let va1 =  JSON.parse(localStorage.getItem("count2"));
    if (va1 === undefined) { va1 = 1; }
    const [count2, setCount2] = useState(() => va1 );
    const {data, loading} =useFetch(`http://numbersapi.com/${count2}/trivia`);
    useEffect(() => {
        localStorage.setItem("count2", JSON.stringify(count2));
    });
    renders.current++;
    // console.log("Helloref2 renders:", renders.current);
    return <div style={{border:"1"}}>Hello2
         <div>{ !data ? "loading..." : data} </div>
        <div className="divrow" >
           <button onClick={() => setCount2(c => c - 1)} >decrement</button>
            <div>count2: {count2}</div>
            <button onClick={() => setCount2(c => c +1)}>increment</button>
        </div>
        <div className="divrow">
        <input name='apidata' placeholder='data' style={{width: '650px'}}
               value={!data ? "loading..." : data} readOnly={true}
                 />
        </div>
    </div>;
}; 