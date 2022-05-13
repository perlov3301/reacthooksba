import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useFetch } from "./trainingusefetch";
 
export const TrainingHello = () => {
    let mycount = JSON.parse(localStorage.getItem("trainingcount"));
    // console.log("traininghello rendering mycount: ", mycount);
    const renders = useRef(0);

    const [measures, setMeasures] = useState({ divWidth: 0, divHeight: 0 });
    const inputWref = useRef();
    const inputHref = useRef();
    const [count, setCount] = useState(() => 
      { if (mycount===null || mycount==='undefined') { return 0; }
        else{ return mycount; }
      }
    );
    const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
    // console.log("traininghello data: ", data);
    const divRef = useRef();
    const [rect, setRect] = useState({});
    useLayoutEffect(() => {
        const rect1 =  divRef.current.getBoundingClientRect();
        // console.log("traninghello useLayouteffect rect1: ", rect1.width, 'X', rect1.height);
        setRect(rect1.width + 'x' + rect1.height);
        inputWref.current.value = rect1.width;
        inputHref.current.value = rect1.height;
    }, [data]);
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