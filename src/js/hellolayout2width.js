import React, { useRef, useState, useEffect } from 'react';
import { useFetch } from "./usefetchuselayout2";
import { useMlayout2 } from './useMlayout2';
import { useMeasureI } from './useMeasureI';

const fround = (a) => {
  let b = a * 10;
  a = Math.round(b);
  return a/10;
};

export const HelloLaout2width = () => {
    const refDiv = useRef();
    const refInp = useRef();
    const [count, setCount] = useState(() => {
        let counthellolayout2 = JSON.parse(localStorage.getItem('counthellolayout2'))
        if (typeof(counthellolayout2)==='number') { return counthellolayout2; }
        else  { return 1; }
      });
    const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
    const rectM = useMeasureI(refDiv, [data]);
      let vh = rectM[0];
      let vw = rectM[1];
    const rect = useMlayout2(refDiv, [data])
    useEffect(() => {
        localStorage.setItem("counthellolayout2", JSON.stringify(count));
      }, [count]);
    return (
        <div style={{margin: '0.3rem 0.3rem'}}>
            <div style={{display: 'flex'}}>
              <div ref={refDiv}>data: {!data ? "loading..." : data} </div>
            </div>
            <pre>
               {JSON.stringify(("data's div measures: "+rectM[0]+'x'+rectM[1]),null, 2)}
            </pre>
            
            <div className='divrow'>
              <div>trainingcount: {count}</div>
              <button onClick={() => setCount(c => c - 1)} >decrement</button>
              <button onClick={() => setCount(c => c + 1)} > increment</button>
            </div>
            <div className='devrow'>
              <button  onClick={() =>
                 { refInp.current.value = rectM[1] }
              } >Show width of data's div</button>
              <span>W=</span>
              <input ref={refInp} 
                  readOnly={true}
                  style={{width: '3rem'}} 
                 />
            </div>
        </div>
    );
};