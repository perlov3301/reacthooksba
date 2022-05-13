import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useMeasure } from "./useMeasure";
import { useFetch } from "./trainingusefetch";
 
export const TrainingHello = () => {
    let mycount = JSON.parse(localStorage.getItem("trainingcount"));
    const [count, setCount] = useState(() => 
        { if (mycount===null || mycount==='undefined') { return 0; }
        else{ return mycount; }
        }
    );
    const [measures, setMeasures] = useState({ divWidth: 0, divHeight: 0 });
    const inputWref = useRef();
    const inputHref = useRef();
    const divRef = useRef();
    const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
    // console.log("traininghello data: ", data);
    
    const fround = (a) => {
        let b = a * 10;
        a = Math.round(b);
        return a/10;
    };
    useLayoutEffect(() => { // measures of data's div to inputs
        const rect1 =  divRef.current.getBoundingClientRect();
        let w = rect1.width;
        let h = rect1.height;
        inputWref.current.value = fround(w);
        inputHref.current.value = fround(h);
    }, [data]);
    // measures of data's div
    const rect = useMeasure(divRef, [data]);
    useEffect(() => {
        localStorage.setItem("trainingcount", JSON.stringify(count));
    }, [count]);

    return (
        <div>
            <span>TrainingHello 9 45 125 190</span>
            <div style={{display: 'flex'}}>
              <div ref={divRef}>data: {!data ? "loading..." : data} </div>
            </div>
            <pre>
               {JSON.stringify(('div measures: '+rect),null, 2)}
            </pre>
            <div>trainingcount: {count}</div>

            <div className='divrow' >
                <span>div measures:</span>
                H=<input name='inputHeight' style={{width:'50px'}}
                    value={measures.inputHeight} 
                    ref={inputHref}
                    readOnly={true} />
               W=<input name='inputWidth' value={measures.inputWidth} 
                    readOnly={true} 
                    ref={inputWref}
                    style={{width:'50px'}}/>
            </div>
   
        
            <input name='mydata' placeholder='await to data'
              value={!data ? "loading" : data}
              style={{width:'90%'}} readOnly />
            <div className='divrow'>
                <button onClick={() => setCount(c => c - 1)} >decrement</button>
                <div>count: {count}</div>
                <button onClick={() => setCount(c => c + 1)} >increment</button>
            </div>
        </div>
       
    );
};